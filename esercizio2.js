/* FUNZIONE FILTRA PREZZO */

function filtraPrezzo(listaProdotti){
    /* CREO DUE VARIABILI PREZZO E LISTA FILTRATA FACENDO UN ARRAY */
    let prezzo=250
    let listaFiltrata= []

    /* CICLO FOR PER LA VERIFICA */
    for ( let index =0 ; index < listaProdotti.length; index++) {
        
        /* E VEDIAMO SE PER OGNI ELEMENTO IL PREZZO E' MAGGIORE DI 250 */
        if (listaProdotti[index].prezzo>prezzo) {
            listaFiltrata[index]= listaProdotti[index]
        }
        
    }
    return listaFiltrata
}





let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]


console.log(filtraPrezzo(listaProdotti))
/* FILTRIAMO IL PREZZO SE E' MAGGIORE DI 250 CON ARROW FUNCTION */
console.log(listaProdotti.filter((listaPrezzo)=> listaPrezzo.prezzo>250))