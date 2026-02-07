import { modal } from "./modal.js";
import { URL } from "./url.js";
const dataMain = document.querySelector('[data-main]')

interface DataPhoto {
    id:number;
    idade:string;
    nome:string;
    peso:string;
    src:string;
    user_name:string;
    user_id:number;
    views:number;
    comentarios:[];
}
export async function fetchPhoto(id:number){
    const response = await fetch(URL + `get/photo/${id}`)
    const dados:Record<string,DataPhoto> = await response.json();

    if(!dataMain) return

    dataMain.innerHTML = ''
    dataMain.innerHTML =/*HTML */ `

    <div data-conteudo-modal class='modal-item'>
        <div class='photo-dog'>
            <img src='https://dogs-srwx.onrender.com/send/${dados.post.src}' />
        </div>
        <div class='modal-aside-dados'>
            <div class='author-e-views'>
                <a href='../pages/author?${dados.post.user_name}.html'>
                    <span class='author'>@${dados.post.user_name}</span>
                </a>
                <span class='views-modal'>${dados.post.views}</span>
            </div>
            <h2 class='titulo-modal'>${dados.post.nome}</h2>
            <div class='dados-item-dog'>
                <span class='barra-esq-dir'>${dados.post.peso} Kg</span>
                <span>${dados.post.idade} anos</span>
            </div>
        </div>
    </div>
        
    `
    modal()
}
