
import { dadosPOsts } from "./postsIguais.js";
import { URL } from "./url.js";

interface DataPhotos {
    id:number;
    nome:string;
    peso:string;
    src:string;
    views:number;
}

export async function fetchDados(){
    const response = await fetch(URL+'get/photos')
    const dados:Record<string, DataPhotos[]>= await response.json()
    const {posts} = dados
    dadosPOsts(posts)
}
