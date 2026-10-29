const dificuldade{
    Basico: {limite: 7},
    Medio: {limite: 5},
    Difícil: {limite: 4},
    Avancado: {limite: 2}
}
const nivel = localStorege.getItem()
const nomeUser = localStorege.getItem("nomeUser") || "Usuario";
const acerto = document.getElementById("acerto");
const erro = document.getElementById("erro");
function iniciaJogo() {
    const nome = document.getElementById("nomeUser").value.trim();

    if(!nome){
        alert("Digite seu nome.");
        return;
    }
    localStorege.setItem("nomeUser", nome);
    window.location.href = "estrutura.html";
}
let tentativa = 0
function start(){
    if(!jogoAtivo) return;
    batata.innerText = nomeUser + "Seja Bem-Vindo.";
    setTimeout(verificacao, 5);
}
function reset(){
    window.location.reload();
}
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("#iniciaJogo");
})