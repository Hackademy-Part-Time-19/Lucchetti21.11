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

console.log(listaProdotti.sort((nome1,nome2)=> nome1.nome - nome2.nome))
console.log(listaProdotti.sort((prezzo1,prezzo2)=> prezzo1.prezzo-prezzo2.prezzo))