import { dadosPOsts } from "../postsIguais.js";
import { URL } from "../url.js"
import { getSession } from "./getSession.js"

export class GetMyPhotos{
    author:string;
    constructor(author:string){
        this.author = author
    }



    async getPhoto(){

        try{

            const response = await fetch(URL + `get/photos/${this.author}`)
            const dados = await response.json();
            dadosPOsts(dados)
        }catch(err){
            
        }
    }


    async init(){
        if(location.pathname.includes('pages/perfil/perfil'))
        await this.getPhoto()
    }

}