const dificuldade = {
    Basico: { limite: 7 },
    Medio: { limite: 5 },
    Difícil: { limite: 4 },
    Avancado: { limite: 2 }
};

const nivelSelecionado = localStorage.getItem("nivel") || "Basico";
const nomeUser = localStorage.getItem("nomeUser") || "Usuário";

const acerto = document.getElementById("acerto");
const erro = document.getElementById("erro");

let jogoAtivo = false;
let tentativa = 0;

function iniciaJogo() {
    const inputNome = document.getElementById("nomeUser");
    const selectNivel = document.getElementById("nivel");

    if (!inputNome) return; 

    const nome = inputNome.value.trim();
    const nivel = selectNivel ? selectNivel.value : "Basico";

    if (!nome) {
        alert("Digite seu nome.");
        return;
    }

    localStorage.setItem("nomeUser", nome);
    localStorage.setItem("nivel", nivel);

    window.location.href = "estrutura.html";
}

function start() {
    if (!jogoAtivo) return;
    const batata = document.getElementById("batata");
    if (batata) {
        batata.innerText = `${nomeUser}, Seja Bem-Vindo!`;
    }
    
    setTimeout(verificacao, 5);
}

function reset() {
    window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
    jogoAtivo = true;
});