import { fetchPhoto } from "./fetchPost.js";
import { URL } from "./url.js";


interface DataPhotos {
    id:number;
    nome:string;
    peso:string;
    src:string;
    views:number;
}

export async function postUsers(){
    const dataMainPosts = document.querySelector('[data-main-posts]')
    const param = window.location.search
    const author = param.replace('?','').replace('.html','')
    const response = await fetch(URL+`get/photos/${author}`);
    const dados:DataPhotos[] = await response.json();
    const dataTituloAuthor = document.querySelector('[data-titulo-author]')


    if(dataTituloAuthor instanceof HTMLElement)
        dataTituloAuthor.innerText = author
    if(!dataMainPosts) return
        dataMainPosts.innerHTML = ''
        console.log(dados)
      dados.forEach((post) =>{
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

      dataElementPhoto.forEach((item) =>{
            item.addEventListener('click',() =>{
                if(item instanceof HTMLDivElement){
                    if(!item.dataset.photo) return 
                    fetchPhoto(parseInt(item.dataset.photo))
                }
            })
          })
      
}