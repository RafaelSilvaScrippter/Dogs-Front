import { URL } from "./url.js";
export async function getSession() {
    const response = await fetch(URL + 'auth/session', {
        method: 'GET',
        credentials: 'include'
    });
    const dados = await response.json();
    return response.status;
}
//# sourceMappingURL=getSession.js.map