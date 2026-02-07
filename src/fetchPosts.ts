import { fetchPhoto } from "./fetchPost.js";
import { URL } from "./url.js";

const dataMainPosts = document.querySelector('[data-main-posts]')
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


    function mostrarDados(){

        if(!dataMainPosts){
            return
        }

        dataMainPosts.innerHTML = ''
      dados.posts.forEach((post) =>{
        dataMainPosts.innerHTML += /*HTML */ `
        <li class='div-photo-${post.id}'>
            <div data-photo="${post.id}">
                <img class='img-${post.id}' src='https://dogs-srwx.onrender.com/send/${post.src}'/>
                <span class='views-span'>${post.views}</span>
            </div>
        </li>
        `
      })
      const dataElementPhoto = dataMainPosts.querySelectorAll('[data-photo]')

      if(!dataElementPhoto) return

      dataElementPhoto.forEach((item) =>{
        item.addEventListener('click',() =>{
            if(item instanceof HTMLDivElement){
                if(!item.dataset.photo) return 
                fetchPhoto(parseInt(item.dataset.photo))
            }
        })
      })

    }
    mostrarDados()
}
