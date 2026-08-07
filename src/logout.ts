import { URL } from "./url.js";

export class LogoutPost{
    element:NodeList | null;
    constructor(element:string){
        this.element = document.querySelectorAll(element)
    }


    async fetchLogout(){
        const response = await fetch(URL + 'auth/logout',{
            method:'POST',
            credentials:'include',
            body:JSON.stringify({email:"rafa@gmail.com"})
        }) 
        const dados = await response.json()

        console.log(response,dados)
    }


    async eventsClickElement(){
      this.element?.forEach((item) =>{
        item.addEventListener('click',async(e) =>{
            await this.fetchLogout()
        })
      })
    }

   async init(){
    console.log(this.element)
        await this.eventsClickElement()
    }
}