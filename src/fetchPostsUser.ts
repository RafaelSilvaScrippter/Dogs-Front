
import { paramUser } from "./getParamUser.js";
import { dadosPOsts } from "./postsIguais.js";
import { URL } from "./url.js";


interface DataPhotos {
    id:number;
    nome:string;
    peso:string;
    src:string;
    views:number;
}

export async function postUsers(){
    const author = paramUser()
    if(author === false) return 
    const response = await fetch(URL+`get/photos/${author}`);
    const dados:DataPhotos[] = await response.json();
    const dataTituloAuthor = document.querySelector('[data-titulo-author]')
    if(author && dataTituloAuthor instanceof HTMLElement)
        dataTituloAuthor.innerText = author
    
    dadosPOsts(dados)

}