import { URL } from "./url.js";

export  function fetchLogin(){
    const formLogin = document.querySelector('[data-login]');

    const dataSpanEmail = document.querySelector('[data-erro-email]')
    const dataSpanSenha = document.querySelector('[data-erro-senha]')
    const dataErroLogin = document.querySelector('[data-erro-login]')

    let form:FormData;;
    if(formLogin instanceof HTMLFormElement){
        formLogin?.addEventListener('submit',(e) => {
            e.preventDefault()
            validarInput()
        })
    }

    function validarInput(){
        const email = formLogin?.querySelector('input[type="email"]')
        const password = formLogin?.querySelector('input[type="password"]')
        if(email instanceof HTMLInputElement && email.value.length === 0){
            if(dataSpanEmail instanceof HTMLElement){
                dataSpanEmail.style.color = 'red'
                dataSpanEmail.innerText = 'Preencha esse campo'
            }
        }else{
             if(dataSpanEmail instanceof HTMLElement){

                dataSpanEmail.innerText = ''
            }
        }

        if(password instanceof HTMLInputElement && password.value.length === 0){
            if(dataSpanSenha instanceof HTMLElement){
                dataSpanSenha.style.color = 'red'
                dataSpanSenha.innerText = 'Preencha esse campo'
            }
        }else{
             if(dataSpanSenha instanceof HTMLElement){

                dataSpanSenha.innerText = ''
            }
        }

        if(password instanceof HTMLInputElement && email instanceof HTMLInputElement){
            if(password.value.length > 0 && email.value.length > 0){
                postLogin()
            }
        }
        

    }

    async function postLogin(){
        if(formLogin instanceof HTMLFormElement){
            form = new FormData(formLogin)
        }
        const data = Object.fromEntries(form)
        const response = await fetch(URL+'auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })


        const dados = await response.json();

        if(response.status !== 404){
            window.location.href = '../pages/perfil/perfil.html'
        }

        if(response && response.status === 404){
            if(dataErroLogin && dataErroLogin instanceof HTMLElement && dados){
                if('message' in dados){
                    dataErroLogin.innerText = dados.message
                    dataErroLogin.style.color  = 'red'
                    dataErroLogin.style.margin = '1rem 0' 
                }
                
            }
            }
    }
}