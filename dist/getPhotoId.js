import { URL } from "./url.js";
export async function getPhotoId() {
    const dataMainPhoto = document.querySelector('[data-main-photo]');
    const url = window.location.search;
    const id = url.replace('?', '').replace('.html', '');
    const response = await fetch(URL + `get/photo/${id}`);
    const dados = await response.json();
    console.log(dados);
    if (!dataMainPhoto)
        return;
    dataMainPhoto.innerHTML = /*HTML */ `

    <img src='${URL}send/${dados.post.src}' />

      <div class='modal-aside-dados bg-initial'>
            <div class='author-e-views'>
                <a href='../pages/author?${dados.post.user_name}.html'>
                    <span class='author'>@${dados.post.user_name}</span>
                </a>
                <span class='views-modal'>${dados.post.views}</span>
            </div>
            <a href='../pages/photo?${dados.post.id}.html'>
                <h2 class='titulo-modal'>${dados.post.nome}</h2>
            </a>
            <div class='dados-item-dog'>
                <span class='barra-esq-dir'>${dados.post.peso} Kg</span>
                <span>${dados.post.idade} anos</span>
            </div>
        </div>

    `;
}
//# sourceMappingURL=getPhotoId.js.map