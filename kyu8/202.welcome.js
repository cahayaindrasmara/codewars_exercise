function greet(language) {

    switch (language) {
        case "czech":
            return "Vitejte";
        case "danish":
            return "Velkomst";
        case "dutch":
            return "Welkom"
        case "estonian":
            return "Tere tulemast";
        case "finnish":
            return "Tervetuloa";
        case "flemish":
            return "Welgekomen";
        case "french":
            return "Bienvenue";
        case "german":
            return "Willkommen";
        case "irish":
            return "Failte";
        case "italian":
            return "Benvenuto";
        case "latvian":
            return "Gaidits";
        case "lithuanian":
            return "Laukiamas";
        case "polish":
            return "Witamy";
        case "spanish":
            return "Bienvenido";
        case "swedish":
            return "Valkommen";
        case "welsh":
            return "Croeso";
        default:
            return "Welcome"

    }

    //kiss, simpan data ke dalam object, lalu panggil sesuai key yang di inputkan
    //return database[language] || "Welcome";
}

console.log(greet('english')); //Welcome
console.log(greet('dutch')); //Welkom
console.log(greet('IP_ADDRESS_INVALID')); //Welcome