let button = document.getElementsById("b1");

function NumeroAleatorio(){
    return Math.floor(Math.random()*(255-1)+1)
}
function TrocarCor(){
    var x1 = NumeroAleatorio();
    var x2 = NumeroAleatorio();
    var x3 = NumeroAleatorio();
    button.addEventListener("click", TrocarCor);
    var cor = "rgb("+x1+","+x2+","+x3+")";
    document.body.style.backgroundColor = cor;
}


TrocarCor();