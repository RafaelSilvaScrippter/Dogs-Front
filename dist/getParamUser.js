export function paramUser() {
    if (!window.location.href.includes('photo')) {
        const param = window.location.search;
        const author = param.replace('?', '').replace('.html', '');
        return author;
    }
    return false;
}
//# sourceMappingURL=getParamUser.js.map