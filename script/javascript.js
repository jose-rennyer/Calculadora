
function inserir(num){
    let valor = document.querySelector(".result").innerHTML
    document.querySelector(".result").innerHTML = valor + num  
}
function apagar(){
    let valor = document.querySelector(".result").innerHTML
    document.querySelector(".result").innerHTML = valor.substring(0, valor.length - 1)
}
function clean(){
    document.querySelector(".result").innerHTML = ""
}
function somar(){
    let valor = document.querySelector(".result").innerHTML
    if(valor){
        document.querySelector(".result").innerHTML = eval(valor)
    } else {
        document.querySelector(".result").innerHTML = "escreva algo aqui"
    }
}