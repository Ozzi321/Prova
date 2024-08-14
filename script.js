const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "vocẽ gosta de desenhar?",
            },
            {
                texto: "vocẽ não gosta de desenhar?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "já tentou aprender a desenhar?",
            },
            {
                texto: "Naõ tentei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou auxílio na internet, vídeos no YouTube, entre outros.",
            },
            {
                texto: "Não procurei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "já procurou cursos de desenho presenciais",
            },
            {
                texto: "Não quero procurar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pratico sozinho",
            },
            {
                texto: "Não quero praticar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "procuro sempre aprender para evoluir .",
            },
            {
                texto: "Não quero evoluir.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter auxiliado seus intereses sobre desenho.",
            },
            {
                texto: "Atualize a página para saber mais sobre desenho.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();