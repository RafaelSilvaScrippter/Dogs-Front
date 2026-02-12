import { erroPostElement, postFetch } from "./postReuse.js";
import { URL } from "./url.js";
import { limparSpanErro, messageErrorElement, validarInputs } from "./validarInput.js";

export async function criarConta(){
    const dataCreateForm = document.querySelector('[data-create-form]')
    const dataSpanErroUsuario = dataCreateForm?.querySelector('[data-error-usuario]')
    const dataSpanErroEmail= dataCreateForm?.querySelector('[data-error-email]')
    const dataSpanErroSenha = dataCreateForm?.querySelector('[data-error-senha]')
    const dataErroCreate = dataCreateForm?.querySelector('[data-erro-create]')
    
    
    if(dataCreateForm instanceof HTMLFormElement)
    dataCreateForm?.addEventListener('submit',(e) =>{
        e.preventDefault()
        enviarInputs()
    })



    function enviarInputs(){
        if(dataCreateForm && dataCreateForm instanceof HTMLFormElement){
            const userInput = dataCreateForm?.querySelector('#usuario')
            if(userInput instanceof HTMLInputElement){
                const usuario = validarInputs(userInput)
                if(!usuario){
                    if(dataSpanErroUsuario instanceof HTMLElement){
                        messageErrorElement(dataSpanErroUsuario,'preencha esse campo')
                    }
                    
                }
                else{
                    if(dataSpanErroUsuario instanceof HTMLElement)
                        limparSpanErro(dataSpanErroUsuario)
                }
                const emailInput = dataCreateForm?.querySelector('#email')
                if(emailInput instanceof HTMLInputElement){
                    const email = validarInputs(emailInput)
                    if(!email){
                        if(dataSpanErroEmail instanceof HTMLElement){
                            messageErrorElement(dataSpanErroEmail,'preencha esse campo')
                        }
                    }else{
                        if(dataSpanErroEmail instanceof HTMLElement)
                        limparSpanErro(dataSpanErroEmail)
                    }
                }
                  const senhaInput = dataCreateForm?.querySelector('#senha')
                if(senhaInput instanceof HTMLInputElement){
                    const email = validarInputs(senhaInput)
                    if(!email){
                        if(dataSpanErroSenha instanceof HTMLElement){
                            messageErrorElement(dataSpanErroSenha,'preencha esse campo')
                        }
                    }else{
                        if(dataSpanErroSenha instanceof HTMLElement)
                        limparSpanErro(dataSpanErroSenha)
                    }
                }
                
                if(userInput instanceof HTMLInputElement && emailInput instanceof HTMLInputElement && senhaInput instanceof HTMLInputElement){
                    if(userInput.value.length > 0 && emailInput.value.length > 0 && emailInput.value.includes('@')  &&   senhaInput.value.length > 0){
                        criarPost()
                    }
                }
                
            }
            
        }
    }

    async function criarPost(){
        if(dataCreateForm instanceof HTMLFormElement){
            const formData = new FormData(dataCreateForm);
            const data:{[key:string]:FormDataEntryValue}= Object.fromEntries(formData)
            const dados = await postFetch<{message:string}>('auth/create',data)
            if(dados === false){
                if(dataErroCreate && dataErroCreate instanceof HTMLElement){
                    erroPostElement(dataErroCreate,'erro ao criar usuário')
                }
            }
            else{
                    window.location.href = '../pages/perfil/perfil.html'
            }
        }
    }
}