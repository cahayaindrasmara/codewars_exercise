/*
Tulis regex untuk menangkap domain utama dari URL, contoh:

Input: "https://sub.example.com/path"

Tangkap: "example"
Catatan: sub. dan /path bisa ada atau tidak, domain bisa subdomain lebih dari satu.
*/


function domainName(url) {
    let regex = url.match(/(?:https:\/\/)?(?:www\.)?(?:[w-]+\.)?([^\.]+)/)
    console.log(regex)
    // console.log(regex[1])
    return regex[1]
}

console.log(domainName("https://sub.example.com/path"))
console.log(domainName("https://www.mail.example.com/path"))
