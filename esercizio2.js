function filtraPrezzo(listaProdotti){
    let prezzo=250
    let listaFiltrata= []
    for ( let index =0 ; index < listaProdotti.length; index++) {
        
        
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
console.log(listaProdotti.filter((listaPrezzo)=> listaPrezzo.prezzo>250))