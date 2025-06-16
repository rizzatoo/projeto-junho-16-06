const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você recebe uma mensagem em seu celular dizendo que uma nova tecnologia foi criada, capaz de traduzir pensamentos em palavras em tempo real. O que você pensa sobre isso?",
        alternativas: [
            {
                texto: "Isso pode mudar a maneira como nos comunicamos para sempre!",
                afirmacao: "Sentiu-se animado com as possibilidades e começou a imaginar novas formas de se expressar usando essa tecnologia."
            },
            {
                texto: "Isso parece invasivo, não sei se seria bom compartilhar meus pensamentos assim.",
                afirmacao: "Ficou receoso e decidiu pesquisar mais sobre segurança e privacidade digital."
            }
        ]
    },
    {
        enunciado: "Ao descobrir essa nova tecnologia, um amigo sugere que você a use para melhorar a produtividade nos estudos. O que você faz?",
        alternativas: [
            {
                texto: "Aceito de imediato, quero ver como isso pode ajudar nos meus estudos.",
                afirmacao: "Experimentou a tecnologia nos estudos e percebeu ganhos na organização e foco."
            },
            {
                texto: "Fico desconfiado e prefiro estudar da forma tradicional, com foco e disciplina.",
                afirmacao: "Escolheu manter seu ritmo tradicional e sentiu orgulho da própria dedicação."
            }
        ]
    },
    {
        enunciado: "Um especialista em tecnologia na escola fala sobre como a IA pode substituir muitas profissões no futuro. O que você pensa sobre isso?",
        alternativas: [
            {
                texto: "Eu vejo oportunidades para novos tipos de trabalho surgirem.",
                afirmacao: "Acredita que a adaptação é chave e está disposto a aprender sempre."
            },
            {
                texto: "Fico preocupado, pois muitos podem ficar sem emprego.",
                afirmacao: "Passou a refletir sobre como equilibrar tecnologia e justiça social."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto para criar uma apresentação sobre a IA e decide usar a nova tecnologia para montar os slides. O que você faz?",
        alternativas: [
            {
                texto: "Usar a IA para me ajudar parece uma boa ideia, vai economizar meu tempo.",
                afirmacao: "Descobriu ferramentas incríveis e se tornou referência entre os colegas."
            },
            {
                texto: "Prefiro fazer a apresentação sozinho, quero aprender o máximo possível no processo.",
                afirmacao: "Aprofundou-se no tema e sentiu-se satisfeito com o próprio esforço."
            }
        ]
    },
    {
        enunciado: "Sua professora pede para vocês discutirem se a IA deve ou não ser usada para decisões importantes, como em hospitais ou tribunais. Qual sua posição?",
        alternativas: [
            {
                texto: "A IA pode ajudar muito, mas precisa ser supervisionada de perto.",
                afirmacao: "Defendeu o uso ético e responsável da tecnologia."
            },
            {
                texto: "A IA não deveria tomar decisões importantes, pois ela pode cometer erros.",
                afirmacao: "Argumentou que o fator humano ainda é essencial em decisões delicadas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
