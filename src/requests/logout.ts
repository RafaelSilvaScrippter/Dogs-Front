import { URL } from "../url.js";

export class LogoutPost{
    element:NodeList | null;
    constructor(element:string){
        this.element = document.querySelectorAll(element);
    }


    async fetchLogout(){
        await fetch(URL + 'auth/logout',{
            method:'DELETE',
            credentials:'include',
        }); 

        console.log('hello')

        window.location.pathname = '../index.html';
    }


    async eventsClickElement(){
      this.element?.forEach((item) =>{
        item.addEventListener('click',async(e) =>{
            e.preventDefault()
            await this.fetchLogout();
        });
      });
    }

   async init(){
        await this.eventsClickElement();
    }
}