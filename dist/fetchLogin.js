import { URL } from "./url.js";
import { limparSpanErro, messageErrorElement, validarInputs } from "./validarInput.js";
export function fetchLogin() {
    const formLogin = document.querySelector('[data-login]');
    const dataSpanEmail = document.querySelector('[data-erro-email]');
    const dataSpanSenha = document.querySelector('[data-erro-senha]');
    const dataErroLogin = document.querySelector('[data-erro-login]');
    let form;
    ;
    if (formLogin instanceof HTMLFormElement) {
        formLogin?.addEventListener('submit', (e) => {
            e.preventDefault();
            enviarForm();
        });
    }
    function enviarForm() {
        const email = formLogin?.querySelector('input[type="email"]');
        const password = formLogin?.querySelector('input[type="password"]');
        if (email instanceof HTMLInputElement) {
            if (!validarInputs(email)) {
                if (dataSpanEmail instanceof HTMLElement) {
                    messageErrorElement(dataSpanEmail, 'preencha esse campo');
                }
            }
            else {
                if (dataSpanEmail instanceof HTMLElement)
                    limparSpanErro(dataSpanEmail);
            }
        }
        if (password instanceof HTMLInputElement) {
            if (!validarInputs(password)) {
                if (dataSpanSenha instanceof HTMLElement) {
                    messageErrorElement(dataSpanSenha, 'preencha esse campo');
                }
            }
            else {
                if (dataSpanSenha instanceof HTMLElement)
                    limparSpanErro(dataSpanSenha);
            }
        }
        if (password instanceof HTMLInputElement && email instanceof HTMLInputElement) {
            if (password.value.length > 0 && email.value.length > 0) {
                postLogin();
            }
        }
    }
    async function postLogin() {
        if (formLogin instanceof HTMLFormElement) {
            form = new FormData(formLogin);
        }
        const data = Object.fromEntries(form);
        const response = await fetch(URL + 'auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const dados = await response.json();
        if (response.status !== 404) {
            window.location.href = '../pages/perfil/perfil.html';
        }
        if (response && response.status === 404) {
            if (dataErroLogin && dataErroLogin instanceof HTMLElement && dados) {
                if ('message' in dados) {
                    messageErrorElement(dataErroLogin, dados.message);
                }
            }
        }
    }
}
//# sourceMappingURL=fetchLogin.js.map