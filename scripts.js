


let botaoinfo = document.querySelector(".botao-informações")
let bloca = document.querySelector(".boco-info")
let audi = document.querySelector(".son-inicio")


botaoinfo.addEventListener("click", mostra)
bloca.addEventListener("click", sair)
window.addEventListener("click", tocar)



function mostra() {
    bloca.style.display = "block"
}

function sair() {
    bloca.style.display = "none"
}

function tocar() {
    audi.play()

}
