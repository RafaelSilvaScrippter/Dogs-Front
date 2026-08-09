import { URL } from "../url.js";
import { PostComments } from "./fetchPostComment.js";
import { getSession } from "./getSession.js";

interface DataPhoto {
    id:number;
    idade:string;
    nome:string;
    peso:string;
    src:string;
    user_id:number;
    user_name:string;
    views:number;
}

export async function getPhotoId(){
    const dataMainPhoto = document.querySelector('[data-main-photo]');
    const url = window.location.search;
    const id = url.replace('?id=','')
    const response = await fetch(URL+`get/photo/${id}`);
    const dados:Record<string,DataPhoto> & Record<string,any>  = await response.json();
    if(!dataMainPhoto) return;

    dataMainPhoto.innerHTML = ''

    if(dataMainPhoto &&
        typeof dados === 'object' &&
        'id' in dados.post && 
        'idade' in dados.post &&
        'nome' in dados.post && 
        'peso' in dados.post && 
        'src' in dados.post &&
        'user_id' in dados.post && 
        'user_name' in dados.post &&
        'views' in dados.post

     ){

        
        dataMainPhoto.innerHTML = /*HTML */`

    <img src='${URL}send/${dados.post.src}' />

        <div data-conteudo-photo class='modal-aside-dados bg-initial'>
            <div class='author-e-views'>
                <a href='../../pages/author.html?user=${dados.post.user_name}'>
                    <span class='author'>@${dados.post.user_name}</span>
                </a>
                <span class='views-modal'>${dados.post.views}</span>
            </div>
            <a href='../../pages/photo.html?id=${dados.post.id}'>
             <h2 class='titulo-modal'>${dados.post.nome}</h2>
            </a>
            <div class='dados-item-dog'>
                <span class='barra-esq-dir'>${dados.post.peso} Kg</span>
                <span>${dados.post.idade} anos</span>
            </div>
            <div div-comments class="div-comentrarios">
                ${dados.comentarios.map((item:Record<string,any>) =>{
                    
                    return /*HTML */`
                    <div class='item-div-comment'>
                        <span>${item.user_name}:</span>` + /*HTML */`<p>${item.comment}</p>
                    </div>
                    `
                })}
            </div>
            <div>
            
                ${await getSession() === 200 ?
                /*HTML */
                `
                    <div class='div-comment-input'>
                        <input data-input-comment class='input-env-commnet' type='text' name='comment' id='comment' />
                        <img data-env-comment src='../../../assets/enviar.svg'/>
                    </div>
                `
                :
                    ''  }
            </div>
        </div>
    `;
     const htmlElementPost = document.querySelector('[data-conteudo-photo]');
        if(htmlElementPost instanceof HTMLElement){
             new PostComments(Number(id),htmlElementPost).init();
        }
       const e =  htmlElementPost?.querySelector('[div-comments]')
       e?.childNodes.forEach((t) =>{
        t.remove()
       })
    }
}