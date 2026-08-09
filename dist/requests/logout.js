import { URL } from "../url.js";
export class LogoutPost {
    element;
    constructor(element) {
        this.element = document.querySelectorAll(element);
    }
    async fetchLogout() {
        await fetch(URL + 'auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({ email: "rafa@gmail.com" })
        });
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
        await this.eventsClickElement();
    }
}
//# sourceMappingURL=logout.js.map