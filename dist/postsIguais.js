import { fetchPhoto } from "./fetchPost.js";
export function dadosPOsts(dados) {
    const dataMainPosts = document.querySelector('[data-main-posts]');
    if (!dataMainPosts)
        return;
    dataMainPosts.innerHTML = '';
    dados.forEach((post) => {
        dataMainPosts.innerHTML += /*HTML */ `
            <li class='div-photo-${post.id}'>
                <div data-photo="${post.id}">
                    <img class='img-${post.id}' src='https://dogs-srwx.onrender.com/send/${post.src}'/>
                    <span class='views-span'>${post.views}</span>
                </div>
            </li>
            `;
    });
    const dataElementPhoto = dataMainPosts.querySelectorAll('[data-photo]');
    dataElementPhoto.forEach((item) => {
        item.addEventListener('click', () => {
            if (item instanceof HTMLDivElement) {
                if (!item.dataset.photo)
                    return;
                fetchPhoto(parseInt(item.dataset.photo));
            }
        });
    });
}
//# sourceMappingURL=postsIguais.js.map