import { URL } from "../url.js";
import { messageErrorElement, validarInputs } from "../validarInput.js";
export class PostPhoto {
    formElement;
    inputs;
    formPostPublish;
    erroElementSpan;
    elementsComplete;
    constructor() {
        this.formElement = document.querySelector('[data-form-publish-post]');
        this.formPostPublish = null;
        this.inputs = this.formElement?.querySelectorAll('[data-input-post]');
        this.erroElementSpan = document.querySelectorAll('[data-erro-post-span]');
        this.elementsComplete = [];
    }
    async fetchPost() {
        if (this.formElement instanceof HTMLFormElement) {
            this.formPostPublish = new FormData(this.formElement);
        }
        let dados;
        if (this.formPostPublish) {
            dados = Object.fromEntries(this.formPostPublish);
        }
        if (dados) {
            console.log('teste');
            const inputFile = this.inputs ? this.inputs[3] : null;
            if (inputFile == null)
                return;
            if (inputFile instanceof HTMLInputElement && inputFile.files) {
                for (const file of inputFile.files) {
                    const fetchUpload = await fetch(URL + 'upload/file', {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/octet-stream",
                            'x-filename': file.name
                        },
                        credentials: 'include',
                        body: file
                    });
                    const dados = await fetchUpload.json();
                    const postPublish = await fetch(URL + 'post/publicacao', {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        credentials: 'include',
                        body: JSON.stringify({ nome: "Apollo", idade: '3', peso: '6', src: dados.src })
                    });
                }
            }
        }
    }
    validateInputName() {
        const name = this.inputs;
        if (name) {
            const validateName = name[0];
            if (validateName instanceof HTMLInputElement) {
                const nameIsValid = validarInputs(validateName);
                if (!nameIsValid) {
                    const spanErroName = this.erroElementSpan;
                    if (spanErroName && spanErroName[0] instanceof HTMLElement) {
                        messageErrorElement(spanErroName[0], 'Preencha esse campo');
                    }
                    this.elementsComplete = [];
                }
                else {
                    this.elementsComplete.push(true);
                }
            }
        }
    }
    validateInputPeso() {
        const peso = this.inputs;
        if (peso) {
            const validatePeso = peso[1];
            if (validatePeso instanceof HTMLInputElement) {
                const pesoIsValid = validarInputs(validatePeso);
                if (!pesoIsValid) {
                    const spanErroPeso = this.erroElementSpan;
                    if (spanErroPeso && spanErroPeso[1] instanceof HTMLElement) {
                        messageErrorElement(spanErroPeso[1], 'Preencha esse campo');
                    }
                    this.elementsComplete = [];
                }
                else {
                    this.elementsComplete.push(true);
                }
            }
        }
    }
    validateInputIdade() {
        const idade = this.inputs;
        if (idade) {
            const validateIdade = idade[2];
            if (validateIdade instanceof HTMLInputElement) {
                const idadeIsValid = validarInputs(validateIdade);
                if (!idadeIsValid) {
                    const spanErroIdade = this.erroElementSpan;
                    if (spanErroIdade && spanErroIdade[2] instanceof HTMLElement) {
                        messageErrorElement(spanErroIdade[2], 'Preencha esse campo');
                    }
                    this.elementsComplete = [];
                }
                else {
                    this.elementsComplete.push(true);
                }
            }
        }
    }
    validateInputFile() {
        const file = this.inputs;
        if (file) {
            const validateFile = file[3];
            if (validateFile instanceof HTMLInputElement) {
                const fileIsValid = validarInputs(validateFile);
                if (!fileIsValid) {
                    const spanErroFile = this.erroElementSpan;
                    if (spanErroFile && spanErroFile[3] instanceof HTMLElement) {
                        messageErrorElement(spanErroFile[3], 'Preencha esse campo');
                    }
                    this.elementsComplete = [];
                }
                else {
                    this.elementsComplete.push(true);
                }
            }
        }
    }
    eventPost() {
        this.formElement?.addEventListener('submit', async (e) => {
            e.preventDefault();
            this.validateInputName();
            this.validateInputPeso();
            this.validateInputIdade();
            this.validateInputFile();
            if (this.elementsComplete.length === 4) {
                console.log('hello world');
                await this.fetchPost();
            }
        });
    }
    init() {
        this.eventPost();
    }
}
//# sourceMappingURL=postPhoto.js.map