let button = document.querySelectorAll("button");

function NumeroAleatorio(){
    return Math.floor(Math.random() * 255);
}

function TrocarCor(){ 
    let x1 = NumeroAleatorio();
    let x2 = NumeroAleatorio();
    let x3 = NumeroAleatorio();
    var cor = "rgb("+x1+", "+x2+", "+x3+");";
    button.textcontent = "";
    button.addEventListener("click", TrocarCor);
    document.body.style.backgroundColor = cor;
}

TrocarCor();