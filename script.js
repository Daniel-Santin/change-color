let button = document.querySelector("button");
let text = document.getElementById("status-head");

function NumeroAleatorio(){
    return Math.floor(Math.random() * 255);
}

function TrocarCor(){ 
    let x1 = NumeroAleatorio();
    let x2 = NumeroAleatorio();
    let x3 = NumeroAleatorio();
    let cor = `rgb(${x1},${x2},${x3})`;
    text.textContent = "rgb("+x1+","+x2+","+x3+")"; 
    button.addEventListener("click",TrocarCor);
    document.body.style.backgroundColor = cor;
}

TrocarCor();