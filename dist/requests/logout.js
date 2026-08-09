import { URL } from "../url.js";
export class LogoutPost {
    element;
    constructor(element) {
        this.element = document.querySelectorAll(element);
    }
    async fetchLogout() {
        const response = await fetch(URL + 'auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({ email: "rafa@gmail.com" })
        });
        const dados = await response.json();
        window.location.pathname = '../index.html';
    }
    async eventsClickElement() {
        this.element?.forEach((item) => {
            item.addEventListener('click', async () => {
                await this.fetchLogout();
            });
        });
    }
    async init() {
        console.log(this.element);
        await this.eventsClickElement();
    }
}
//# sourceMappingURL=logout.js.map