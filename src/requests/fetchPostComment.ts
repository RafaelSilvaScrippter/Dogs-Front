import { URL } from "../url.js";
import { fetchPhoto } from "./fetchPost.js";

export class PostComments{
    dataEnvComment:HTMLElement|null;
    dataInputContentComment:HTMLElement|null;
    id:number;
    constructor(id:number,elementFather:HTMLElement){
        this.id = id;
        console.log(elementFather);
        this.dataEnvComment = elementFather.querySelector('[data-env-comment]');
        this.dataInputContentComment = elementFather.querySelector('[data-input-comment]');
    }


    async fetchPostComment(){


        let commentContent;
        
        if(this.dataInputContentComment instanceof HTMLInputElement){
            commentContent = this.dataInputContentComment.value;
        }

        const response = await fetch(URL + `post/comments/${this.id}`,{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            credentials:'include',
            body:JSON.stringify({comment:commentContent})
        });
        const dados = await response.json();
    }


    addEventComment(){
        if(this.dataEnvComment){
            this.dataEnvComment.addEventListener('click', async() =>{
                if(this.dataInputContentComment){
                    await this.fetchPostComment();
                    await fetchPhoto(this.id)
                }
            });
        }
    }

    init(){
        console.log(this.dataEnvComment);
        this.addEventComment();
    }

}