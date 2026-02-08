import { dadosPOsts } from "./postsIguais.js";
import { URL } from "./url.js";
export async function fetchDados() {
    const response = await fetch(URL + 'get/photos');
    const dados = await response.json();
    const { posts } = dados;
    dadosPOsts(posts);
}
//# sourceMappingURL=fetchPosts.js.map