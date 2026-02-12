import { URL } from "./url.js";

interface DataForm {
    [key:string]:FormDataEntryValue
}


export async function postFetch<T>(path:string,data:DataForm):Promise<boolean | T>{
    const response = await fetch(URL+path,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
        
    })

    console.log(response.status)
    if(response.status === 400 || response.status === 404){
        return false
    }else{   
        return response.json();
    }
}

export function erroPostElement(element:HTMLElement,message:string){
    element.style.color = 'red'
    element.style.margin = '0.6rem 0'
    element.innerText = message
}