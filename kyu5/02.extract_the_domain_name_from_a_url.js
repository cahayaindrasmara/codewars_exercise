function domainName(url) {
    let regex = url.match(/(?:https?:\/\/)?(?:www\.)?([^\.]+)/);
    console.log(regex)
    return regex ? regex[1] : null;
}

console.log(domainName("http://google.com")); //google