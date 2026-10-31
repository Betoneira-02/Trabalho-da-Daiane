document.getElementById('btnEnviar').addEventListener('click', function() {
    const plataforma = document.getElementById('plataforma').value;
    const duvida = document.getElementById('duvida').value.trim();
    const resultadoDiv = document.getElementById('resultado');
    const conteudoResposta = document.getElementById('conteudoResposta');
    if (!plataforma) {
        alert('Por favor, escolha uma plataforma.');
        return;
    }
    if (!duvida) {
        alert('Por favor, digite sua dúvida ou questão.');
        return;
    }
    let respostaDica = '';
    if (plataforma === 'leia') {
        respostaDica = `
            <p><strong> Dica para o Leia Paraná:</strong> Antes de responder às perguntas de interpretação, releia o trecho em que o personagem principal toma uma decisão importante.</p>
            <p><em>Como proceder:</em> Procure no texto as palavras-chave da pergunta e analise o contexto em volta delas para encontrar a resposta por conta própria.</p>
        `;
    } else if (plataforma === 'redacao') {
        respostaDica = `
            <p><strong> Dica para a Redação Paraná:</strong> Lembre-se da estrutura básica: Introdução, Desenvolvimento e Conclusão.</p>
            <p><em>Como proceder:</em> Em vez de pensar no texto todo de uma vez, escreva uma frase por parágrafo respondendo: "O que é?", "Por que acontece?" e "Como resolver?".</p>
        `;
    } else if (plataforma === 'ingles') {
        respostaDica = `
            <p><strong> Dica para o Inglês Paraná:</strong> Foque nas imagens de contexto e nas palavras cognatas.</p>
            <p><em>Como proceder:</em> Tente traduzir apenas o verbo principal da frase para entender a ação que está sendo pedida, sem precisar traduzir palavra por palavra.</p>
        `;
    }
    conteudoResposta.innerHTML = respostaDica;
    resultadoDiv.classList.remove('hidden');
});
