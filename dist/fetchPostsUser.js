import { paramUser } from "./getParamUser.js";
import { dadosPOsts } from "./postsIguais.js";
import { URL } from "./url.js";
export async function postUsers() {
    const author = paramUser();
    if (author === false)
        return;
    const response = await fetch(URL + `get/photos/${author}`);
    const dados = await response.json();
    const dataTituloAuthor = document.querySelector('[data-titulo-author]');
    if (author && dataTituloAuthor instanceof HTMLElement)
        dataTituloAuthor.innerText = author;
    dadosPOsts(dados);
}
//# sourceMappingURL=fetchPostsUser.js.map