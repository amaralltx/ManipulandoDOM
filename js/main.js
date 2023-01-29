import { pecas } from "./estatisticas.js";

const $controle =  document.querySelectorAll("[data-controle]");

$controle.forEach( elemento => {
    elemento.addEventListener("click", evento => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

const $estatisticas = document.querySelectorAll("[data-estatistica]");

function manipulaDados(operacao, controle){

    const $controleContador = controle.querySelector("[data-contador]");

    if(operacao === "-" &&  $controleContador.value != 0){
        $controleContador.value = parseInt($controleContador.value) - 1;
    } else if(operacao === "+") {
        $controleContador.value = parseInt($controleContador.value) + 1;
    }
}

function atualizaEstatisticas(peca){

    $estatisticas.forEach( elemento => {
        elemento.textContent  = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}
