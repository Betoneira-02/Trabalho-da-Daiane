// Dados das metas por plataforma e nível/módulo
const quizData = {
    "Leia Paraná": {
        "Nível 1": [
            {
                question: "Qual é a meta semanal recomendada de leitura e interação na plataforma Leia Paraná?",
                options: [
                    "Acessar apenas uma vez no mês",
                    "Ler livros e cumprir a frequência semanal estabelecida pela escola",
                    "Apenas baixar um livro sem abrir",
                    "Responder somente aos testes finais do ano"
                ],
                answer: 1
            },
            {
                question: "Como o progresso de leitura é contabilizado no Leia Paraná?",
                options: [
                    "Pelo tempo com o aplicativo aberto e páginas lidas/registradas",
                    "Apenas pela quantidade de fotos tiradas da tela",
                    "Pelo envio de mensagens no chat",
                    "Através do login diário sem leitura"
                ],
                answer: 0
            }
        ],
        "Nível 2": [
            {
                question: "O que acontece quando o aluno atinge a meta de livros concluídos no Leia Paraná?",
                options: [
                    "Sua pontuação e engajamento contabilizam para o histórico escolar e projetos da rede",
                    "A conta é bloqueada automaticamente",
                    "As atividades deixam de valer nota",
                    "O acesso é transferido para outra escola"
                ],
                answer: 0
            }
        ]
    },
    "Redação Paraná": {
        "Fácil": [
            {
                question: "Qual é o principal objetivo da plataforma Redação Paraná?",
                options: [
                    "Praticar a escrita textual com correções inteligentes e orientadas por critérios",
                    "Apenas assistir a vídeos de gramática",
                    "Jogar minigames de digitação",
                    "Fazer cálculos matemáticos automatizados"
                ],
                answer: 0
            },
            {
                question: "Com que frequência o envio de redações costuma ser estipulado nas metas?",
                options: [
                    "Uma redação a cada ciclo/módulo estipulado pelo professor",
                    "Apenas no último dia letivo do ano",
                    "De hora em hora",
                    "Nunca, o envio é opcional sem prazos"
                ],
                answer: 0
            }
        ],
        "Médio": [
            {
                question: "O que o aluno deve fazer após receber a correção e a nota preliminar no Redação Paraná?",
                options: [
                    "Reescrever o texto aplicando as melhorias sugeridas pela devolutiva",
                    "Apagar a conta e criar outra",
                    "Ignorar os apontamentos do sistema",
                    "Imprimir o comprovante de término"
                ],
                answer: 0
            }
        ]
    },
    "Inglês Paraná": {
        "Básico": [
            {
                question: "Qual a importância de cumprir as atividades interativas no Inglês Paraná?",
                options: [
                    "Desenvolver habilidades de listening, reading e vocabulário garantindo a meta",
                    "Apenas ocupar espaço no celular",
                    "Ganhar prêmios em dinheiro",
                    "Substituir totalmente as aulas presenciais de todas as matérias"
                ],
                answer: 0
            }
        ],
        "Intermediário": [
            {
                question: "Como o sistema do Inglês Paraná avalia o avanço do estudante nas metas?",
                options: [
                    "Através da conclusão de módulos, lições e pontuações nos exercícios de fixação",
                    "Somente pela troca da foto de perfil",
                    "Pelo número de vezes que clicou no menu inicial",
                    "Através de chamadas de vídeo semanais"
                ],
                answer: 0
            }
        ]
    }
};

// Variáveis de controle do estado
let currentCategory = "";
let currentDifficulty = "";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// Funções de navegação e controle
function goToScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.style.display = "none";
    });
    const target = document.getElementById(screenId);
    if (target) {
        target.style.display = "block";
    }
}

function selectCategory(category) {
    currentCategory = category;
    
    // Atualiza dinamicamente os botões de dificuldade de acordo com a plataforma escolhida
    const diffContainer = document.getElementById("difficulty-buttons");
    diffContainer.innerHTML = "";
    
    if (quizData[category]) {
        Object.keys(quizData[category]).forEach(diff => {
            const btn = document.createElement("button");
            btn.innerText = diff;
            btn.className = "option-btn";
            btn.onclick = () => selectDifficulty(diff);
            diffContainer.appendChild(btn);
        });
    }
    
    // Adiciona botão de voltar
    const backBtn = document.createElement("button");
    backBtn.innerText = "Voltar às Plataformas";
    backBtn.className = "back-btn";
    backBtn.onclick = () => goToScreen("category-screen");
    diffContainer.appendChild(backBtn);

    goToScreen("difficulty-screen");
}

function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    
    if (quizData[currentCategory] && quizData[currentCategory][currentDifficulty]) {
        currentQuestions = quizData[currentCategory][currentDifficulty];
        currentIndex = 0;
        score = 0;
        
        goToScreen("quiz-screen");
        loadQuestion();
    } else {
        alert("Ops! Não há perguntas cadastradas para esta seleção.");
    }
}

function loadQuestion() {
    if (currentIndex < currentQuestions.length) {
        const q = currentQuestions[currentIndex];
        
        document.getElementById("question-text").innerText = q.question;
        document.getElementById("progress-indicator").innerText = `Questão ${currentIndex + 1} de ${currentQuestions.length} (${currentCategory} - ${currentDifficulty})`;
        
        const optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = "";
        
        q.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.innerText = option;
            button.className = "option-btn";
            button.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(button);
        });
    } else {
        showResults();
    }
}

function checkAnswer(selectedIndex) {
    const q = currentQuestions[currentIndex];
    if (selectedIndex === q.answer) {
        score++;
    }
    currentIndex++;
    loadQuestion();
}

function showResults() {
    goToScreen("result-screen");
    document.getElementById("result-text").innerText = `Você acertou ${score} de ${currentQuestions.length} perguntas sobre as metas do ${currentCategory}!`;
}