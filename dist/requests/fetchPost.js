import { modal } from "../modal.js";
import { URL } from "../url.js";
import { PostComments } from "./fetchPostComment.js";
import { getSession } from "./getSession.js";
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
            <div class='div-content'>
        
                <div class='author-e-views'>
                    <a href='../pages/author.html?user=${dados.post.user_name}'>
                    <span class='author'>@${dados.post.user_name}</span>
                    </a>
                    <span class='views-modal'>${dados.post.views}</span>
                </div>
                <a href='../pages/photo.html?id=${dados.post.id}'>
                    <h2 class='titulo-modal'>${dados.post.nome}</h2>
                </a>
                <div class='dados-item-dog'>
                    <span class='barra-esq-dir'>${dados.post.peso} Kg</span>
                    <span>${dados.post.idade} anos</span>
                </div>
                <div div-comments class="div-comentrarios">
                      ${dados.comentarios.map((item) => {
        return /*HTML */ `
                    <div class='item-div-comment'>
                        <span>${item.user_name}:</span>` + /*HTML */ `<p>${item.comment}</p>
                    </div>
                    `;
    })}
                </div>
            </div>
            ${await getSession() === 200 ?
        /*HTML */ `
                <div class='div-comment-input'>
                    <input data-input-comment class='input-env-commnet' type='text' name='comment' id='comment' />
                    <img data-env-comment src='../../../assets/enviar.svg'/>
                </div>
            `
        :
            ''}
        </div>
    </div>
        
    `;
    const htmlElementPost = document.querySelector('[data-conteudo-modal]');
    if (htmlElementPost instanceof HTMLElement) {
        new PostComments(id, htmlElementPost).init();
    }
    const e = htmlElementPost?.querySelector('[div-comments]');
    e?.childNodes.forEach((t) => {
        t.remove();
    });
    modal();
}
//# sourceMappingURL=fetchPost.js.map