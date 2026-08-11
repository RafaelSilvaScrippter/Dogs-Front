import { dadosPOsts } from "../postsIguais.js";
import { URL } from "../url.js"
import { getSession } from "./getSession.js"

export class GetMyPhotos{
    author:string;
    constructor(author:string){
        this.author = author
    }



    async getPhoto(){

        const response = await fetch(URL + `get/photos/${this.author}`)
        const dados = await response.json();
        dadosPOsts(dados)
    }


    async init(){
        if(location.pathname.includes('pages'))
        await this.getPhoto()
    }

}