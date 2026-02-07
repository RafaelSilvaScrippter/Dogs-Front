import { modal } from "./modal.js";
import { URL } from "./url.js";
const dataMain = document.querySelector('[data-main]');
export async function fetchPhoto(id) {
    const response = await fetch(URL + `get/photo/${id}`);
    const dados = await response.json();
    if (!dataMain)
        return;
    dataMain.innerHTML = '';
    dataMain.innerHTML = /*HTML */ `

    <div data-conteudo-modal class='modal-item'>
        <div class='photo-dog'>
            <img src='https://dogs-srwx.onrender.com/send/${dados.post.src}' />
        </div>
        <div class='modal-aside-dados'>
            <div class='author-e-views'>
                <span class='author'>@${dados.post.user_name}</span>
                <span class='views-modal'>${dados.post.views}</span>
            </div>
            <h2 class='titulo-modal'>${dados.post.nome}</h2>
            <div class='dados-item-dog'>
                <span class='barra-esq-dir'>${dados.post.peso} Kg</span>
                <span>${dados.post.idade} anos</span>
            </div>
        </div>
    </div>
        
    `;
    modal();
}
//# sourceMappingURL=fetchPost.js.map