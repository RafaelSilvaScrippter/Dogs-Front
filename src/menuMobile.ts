export function menuMobile(){
    const dataMenuMobileDiv = document.querySelector('[data-menu-mobile]')
    const dataConteudoMenuMobile = document.querySelector('[data-conteudo-menu-mobile]')

    dataMenuMobileDiv?.addEventListener("click",ativarMenu)

    function ativarMenu(this:HTMLElement){
            this.classList.toggle('ativo')
            dataConteudoMenuMobile?.classList.toggle('ativo')
        
    }
}