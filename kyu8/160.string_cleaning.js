function stringClean(s) {
    let regex = s.match(/[^\d]/g)
    //   console.log(regex)
    return regex ? regex.join("") : ""

    //kiss
    //return s.replace(/\d/g, "");
}

console.log(stringClean("")); //""
console.log(stringClean("! !")); //! !
console.log(stringClean("123456789")); //""
console.log(stringClean("(E3at m2e2!!)")); //(Eat me!!)
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!")); //Dsa cdsc csa!!! I Am cool!
