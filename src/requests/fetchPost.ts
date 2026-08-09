import { modal } from "../modal.js";
import { URL } from "../url.js";
import { PostComments } from "./fetchPostComment.js";
import { getSession } from "./getSession.js";
const dataMain = document.querySelector('[data-main]');

interface DataPhoto {
    id:number;
    idade:string;
    nome:string;
    peso:string;
    src:string;
    user_name:string;
    user_id:number;
    views:number;
}

export async function fetchPhoto(id:number){
    const response = await fetch(URL + `get/photo/${id}`);
    const dados:Record<string,DataPhoto> & Record<string,any> = await response.json();

    console.log(dados.comentarios);
    if(!dataMain) return;

    dataMain.innerHTML = '';
    dataMain.innerHTML =/*HTML */ `

    <div data-conteudo-modal class='modal-item'>
    <div class='photo-dog'>
            <img src='https://dogs-srwx.onrender.com/send/${dados.post.src}' />
        </div>
        <div class='modal-aside-dados'>
            <div class='div-content'>
        
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
                <div class="div-comentrarios">
                    ${dados.comentarios.map((item:Record<string,any>) =>{
                        return `<span>${item.user_name}:</span>` + `<p>${item.comment}</p>`;  
                    })}
                </div>
            </div>
            ${await getSession() !== 404 ?
            `
                <div class='div-comment-input'>
                    <input data-input-comment class='input-env-commnet' type='text' name='comment' id='comment' />
                    <img data-env-comment src='../../../assets/enviar.svg'/>
                </div>
            `
            :
            ''
            }
        </div>
    </div>
        
    `;
    const htmlElementPost = document.querySelector('[data-conteudo-modal]');
    if(htmlElementPost instanceof HTMLElement){
         new PostComments(id,htmlElementPost).init();
    }
    modal();
}



