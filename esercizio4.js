function palindroma(frase) {
    let stringa= /\W/g;
    let stringaModificata = frase.toLowerCase().replace(stringa, '');
    let stringaInversa = stringaModificata.split('').reverse().join('');
    return stringaInversa===stringaModificata

    
}

let frase1="i topi non avevano nipoti"
let frase2="Perche' non so programmare"
console.log(palindroma(frase2))