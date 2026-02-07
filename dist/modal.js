export function modal() {
    const dataModal = document.querySelector('[data-main]');
    const dataConteudoModal = dataModal?.querySelector('[data-conteudo-modal]');
    dataModal?.classList.add('modal-on');
    if (dataModal instanceof HTMLElement) {
        dataModal.style.display = 'grid';
    }
    if (dataModal instanceof HTMLElement) {
        dataModal?.addEventListener('click', (e) => {
            if (dataModal instanceof HTMLDivElement) {
                if (dataModal.classList.contains('modal-on')) {
                    if (dataConteudoModal) {
                        if (e.target instanceof Node) {
                            if (e.target.contains(dataConteudoModal)) {
                                dataModal.classList.remove('modal-on');
                                dataModal.style.display = 'none';
                            }
                        }
                    }
                }
            }
        });
    }
}
//# sourceMappingURL=modal.js.map