import { URL } from "./url.js";
export async function postFetch(path, data) {
    const response = await fetch(URL + path, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(response.status);
    if (response.status === 400 || response.status === 404) {
        return false;
    }
    else {
        return response.json();
    }
}
export function erroPostElement(element, message) {
    element.style.color = 'red';
    element.style.margin = '0.6rem 0';
    element.innerText = message;
}
//# sourceMappingURL=postReuse.js.map