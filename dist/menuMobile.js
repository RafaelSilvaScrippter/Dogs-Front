export function menuMobile() {
    const dataMenuMobileDiv = document.querySelector('[data-menu-mobile]');
    const dataConteudoMenuMobile = document.querySelector('[data-conteudo-menu-mobile]');
    dataMenuMobileDiv?.addEventListener("click", ativarMenu);
    function ativarMenu() {
        if (window.innerWidth <= 650) {
            this.classList.toggle('ativo');
            dataConteudoMenuMobile?.classList.toggle('ativo');
        }
    }
}
//# sourceMappingURL=menuMobile.js.map