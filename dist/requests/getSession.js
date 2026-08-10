import { URL } from "../url.js";
import { GetMyPhotos } from "./getMyPhotos.js";
export async function getSession() {
    const headerLink = document.querySelector('[data-header-link]');
    const response = await fetch(URL + 'auth/session', {
        method: 'GET',
        credentials: 'include'
    });
    const dados = await response.json();
    new GetMyPhotos(dados.username).init();
    if (response.status && response.status === 200) {
        if (headerLink instanceof HTMLElement) {
            headerLink.innerText = dados.username;
        }
    }
    else {
        if (headerLink instanceof HTMLElement) {
            headerLink.innerText = 'Login / Criar';
        }
    }
    return response.status;
}
//# sourceMappingURL=getSession.js.map