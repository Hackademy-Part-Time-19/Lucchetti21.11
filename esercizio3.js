let url="https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"

let urlSplittato1= url.split("?") 
let urlSplittato2= urlSplittato1[1].split("&")
console.log(urlSplittato2)