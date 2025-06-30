const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acorda em um dia de folga e o clima está perfeito. O que decide fazer?",
        alternativas: [
            {
                texto: "Saio para uma caminhada e aproveito a natureza.",
                afirmacao: "Conectou-se com o ambiente ao redor e sentiu uma paz profunda."
            },
            {
                texto: "Fico em casa para descansar e curtir um tempo sozinho.",
                afirmacao: "Teve um dia relaxante e refletiu sobre seus próprios sentimentos."
            }
        ]
    },
    {
        enunciado: "Um amigo te convida para participar de um projeto voluntário. Qual sua reação?",
        alternativas: [
            {
                texto: "Aceito na hora! Adoro ajudar os outros.",
                afirmacao: "Sentiu-se útil e percebeu o impacto positivo que pode causar."
            },
            {
                texto: "Recuso educadamente, pois estou focado em outros objetivos no momento.",
                afirmacao: "Respeitou seus limites e entendeu que ajudar também envolve equilíbrio pessoal."
            }
        ]
    },
    {
        enunciado: "Durante uma conversa difícil, alguém te interrompe e te julga sem ouvir. Como você reage?",
        alternativas: [
            {
                texto: "Mantenho a calma e tento explicar meu ponto de vista.",
                afirmacao: "Mostrou maturidade e buscou o diálogo mesmo diante do conflito."
            },
            {
                texto: "Me afasto da discussão para evitar mais estresse.",
                afirmacao: "Escolheu preservar sua saúde emocional em vez de insistir na briga."
            }
        ]
    },
    {
        enunciado: "Você tem a chance de fazer um intercâmbio para outro país. O que faz?",
        alternativas: [
            {
                texto: "Aproveito a oportunidade para viver uma nova experiência.",
                afirmacao: "Expandiu seus horizontes e cresceu com os desafios da nova cultura."
            },
            {
                texto: "Recuso, pois não me sinto preparado para sair da minha zona de conforto agora.",
                afirmacao: "Respeitou seu momento e decidiu se preparar melhor para o futuro."
            }
        ]
    },
    {
        enunciado: "Você precisa decidir entre seguir uma carreira segura ou arriscar em um sonho. O que escolhe?",
        alternativas: [
            {
                texto: "Sigo meu sonho, mesmo com os riscos.",
                afirmacao: "Acreditou no seu potencial e decidiu trilhar um caminho autêntico."
            },
            {
                texto: "Escolho a segurança, pensando na estabilidade da minha vida.",
                afirmacao: "Priorizou o equilíbrio e fez um plano sólido para o futuro."
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
    caixaPerguntas.textContent = "Ao final da jornada...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
