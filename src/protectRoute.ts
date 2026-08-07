import { getSession } from "./getSession.js";

export class RouteProtected{
    element:HTMLElement | null
    constructor(element:string){
            this.element= document.querySelector(element)
    }

async isLogged():Promise<boolean>{

        const getSessionStatus = await getSession()

        if(typeof getSessionStatus !== 'number'){
            return false
        }

        if(getSessionStatus === 200){   
            return true
        }else{
            return false
        }

    }

    async changePathLinkHeader(){

        if(this.element instanceof HTMLAnchorElement){
            if( await this.isLogged()){
                this.element.href = '../perfil/perfil.html'
            }else{
                
                this.element.href = '../pages/login.html'
            }
        }

    }


    async protected(){
        const pathActual =window.location.pathname 
       if((pathActual.includes('login') || pathActual.includes('cadastro')) && await this.isLogged()){
            window.location.href = '/pages/perfil/perfil.html'
        }
        
        console.log(await this.isLogged())

        if(pathActual.includes('/pages/perfil') &&  await this.isLogged() === false){
            console.log('hell oworld')
           window.location.href = '../../index.html'

       }
    }

   async init(){
        await this.changePathLinkHeader()
        await this.protected()
    }

}