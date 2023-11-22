
/* DOBBIAMO PRENDERE LA FRASE */
function palindroma(frase) {
    /*TOGLIERE GLI SPAZI */
    let stringa= /\W/g;
    /* METTERLA TUTTA IN PICCOLO */
    let stringaModificata = frase.toLowerCase().replace(stringa, '');
    /*SPLITTARLA IN UN ARRAY INVERTIRE LA FRASE E RIUNIRLA    */
    let stringaInversa = stringaModificata.split('').reverse().join('');
    /*FAR TORNARE COME RISULTATO TRUE/FALSE   */
    return stringaInversa===stringaModificata

    
}

let frase1="i topi non avevano nipoti"
let frase2="Perche' non so programmare"
console.log(palindroma(frase2))