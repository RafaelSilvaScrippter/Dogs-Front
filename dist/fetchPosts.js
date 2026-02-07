import { URL } from "./url.js";
const dataMainPosts = document.querySelector('[data-main-posts]');
export async function fetchDados() {
    const response = await fetch(URL + 'get/photos');
    const dados = await response.json();
    function mostrarDados() {
        if (!dataMainPosts) {
            return;
        }
        dataMainPosts.innerHTML = '';
        dados.posts.forEach((post) => {
            dataMainPosts.innerHTML += /*HTML */ `
        <li class='div-photo-${post.id}'>
            <div>
                <img class='img-${post.id}' src='https://dogs-srwx.onrender.com/send/${post.src}'/>
                <span class='views-span'>${post.views}</span>
            </div>
        </li>
        `;
        });
    }
    mostrarDados();
}
