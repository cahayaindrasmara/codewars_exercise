function htmlspecialchars(formData) {
    let result = ""
    for (let i = 0; i < formData.length; i++) {
        console.log(formData[i]);
        if (formData[i] === "<") {
            result += "&lt;"
        } else if (formData[i] === ">") {
            result += "&gt;"
        } else if (formData[i] === '"') {
            result += "&quot;"
        } else if (formData[i] === "&") {
            result += "&amp;"
        } else {
            result += formData[i];
        }
    }
    return result;

    // kiss
    /*
     return formData.replace(/&/g, "&amp;")
                 .replace(/"/g, "&quot;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;");
    */
}

// console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?'));
console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>"));
