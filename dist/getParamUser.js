export function paramUser() {
    const param = window.location.search;
    const author = param.replace('?', '').replace('.html', '');
    return author;
}
//# sourceMappingURL=getParamUser.js.map