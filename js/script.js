let conta,ope = false, num = '',num1 = '',oper

let clicou = (click) => {

    if(ope == false){
        resultado.innerHTML += `<span>${click}</span>`
        num += click
        console.log(num)
        ope = true
    }else if(ope == true){
        resultado.innerHTML += `<span>${click}</span>`
        num1 += click
        console.log(num1)
    }



}


let operacao = (op) => {

    resultado.innerHTML += `<span>${op}</span>`
    ope = true
    oper = op

}

let limpar = () => {

    resultado.innerHTML = ``
    ope = false
    num = 0
    num1 = 0

}

let calcular = () => {

   
    switch(oper){

        case '+':

            conta = parseInt(num) + parseInt(num1)
            resultado.innerHTML = ``
            resultado.innerHTML += `<span>${conta}</span>`
            ope = false

        break
        case '-':

            conta = parseInt(num) - parseInt(num1)
            resultado.innerHTML = ``
            resultado.innerHTML += `<span>${conta}</span>`
            ope = false
        break
        case '*':

            conta = parseInt(num) * parseInt(num1)
            resultado.innerHTML = ``
            resultado.innerHTML += `<span>${conta}</span>`
            ope = false
        break
        case '/':
        
            conta = parseInt(num) / parseInt(num1)
            resultado.innerHTML = ``
            resultado.innerHTML += `<span>${conta}</span>`
            ope = false
        break
        default:
        break

    }

}




// Usar o teclado para calcular
document.addEventListener('keydown', function(e) {
    
    if(e.key == "1"){
      document.getElementById("1").click();
    }
    if(e.key == "2"){
        document.getElementById("2").click();
    }
    if(e.key == "3"){
        document.getElementById("3").click();
    }
    if(e.key == "4"){
        document.getElementById("4").click();
    }
    if(e.key == "5"){
        document.getElementById("5").click();
    }
    if(e.key == "6"){
        document.getElementById("6").click();
    }
    if(e.key == "7"){
        document.getElementById("7").click();
    }
    if(e.key == "8"){
        document.getElementById("8").click();
    }
    if(e.key == "9"){
        document.getElementById("9").click();
    }
    if(e.key == "0"){
        document.getElementById("0").click();
    }
    if(e.key == "+"){
        document.getElementById("ms").click();
    }
    if(e.key == "-"){
        document.getElementById("ms1").click();
    }
    if(e.key == "*"){
        document.getElementById("mp").click();
    }
    if(e.key == "/"){
        document.getElementById("dv").click();
    }
    if(e.key == "Enter"){
        document.getElementById("cal").click();
    }
    
    
});