import { dadosPOsts } from "../postsIguais.js";
import { URL } from "../url.js";
export class GetMyPhotos {
    author;
    constructor(author) {
        this.author = author;
    }
    async getPhoto() {
        const response = await fetch(URL + `get/photos/${this.author}`);
        const dados = await response.json();
        dadosPOsts(dados);
    }
    async init() {
        await this.getPhoto();
    }
}
//# sourceMappingURL=getMyPhotos.js.map