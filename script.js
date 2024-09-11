var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var Resultado = document.querySelector('span')

function Somar() {
    Resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value) 
}

function Subtrair(){
        Resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value) 
    }

function Multiplicar(){
            Resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value) 
        }

function Dividir(){
            Resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value) 
        }

