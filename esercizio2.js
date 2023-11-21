function filtraPrezzo(listaProdotti){

    
    for ( let index =0 ; index < listaProdotti.length; index++) {
        let prezzo=250
        if (listaProdotti.prezzo>prezzo) {
            listaProdotti=listaProdotti.push(listaProdotti.prezzo)
        }
        
    }
    return listaProdotti
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