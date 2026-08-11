export class PhotoPreviw{
    dataPreview:HTMLElement | null
    dataInputFile:HTMLInputElement | null
    constructor(){
        this.dataPreview = document.querySelector('[data-preview]')
        this.dataInputFile = document.querySelector('[data-file]')
    }


    preview(e:Event){
        if(this.dataInputFile) {
            const r = new FileReader();

            r.onload = () =>{
                if(this.dataPreview instanceof HTMLImageElement){
                    if(typeof r.result === 'string' )
                    this.dataPreview.src = r.result;
                }
            }
            if(e.target instanceof HTMLInputElement && e.target.files){
                r.readAsDataURL(e.target.files[0])
            }
        }
    }


    init(){
        this.dataInputFile?.addEventListener('change',(e) =>{

            this.preview(e)
        })
    }
}