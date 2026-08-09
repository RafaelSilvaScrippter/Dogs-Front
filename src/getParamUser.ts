export function paramUser(){
        if(!window.location.href.includes('photo')){

                const param = window.location.search;
                const author = param.replace('?','').replace('.html','').replace('user=','');
                return author;
        }
        return false;
}