import { paramUser } from "./getParamUser.js";
import { dadosPOsts } from "./postsIguais.js";
import { URL } from "./url.js";
export async function postUsers() {
    const author = paramUser();
    const response = await fetch(URL + `get/photos/${author}`);
    const dados = await response.json();
    const dataTituloAuthor = document.querySelector('[data-titulo-author]');
    console.log(dataTituloAuthor);
    if (dataTituloAuthor instanceof HTMLElement)
        dataTituloAuthor.innerText = author;
    dadosPOsts(dados);
}
//# sourceMappingURL=fetchPostsUser.js.map