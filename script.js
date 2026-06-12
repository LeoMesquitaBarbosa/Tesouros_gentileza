const quizData = {
  "title": "Tesouros da Gentileza",
  "questions": [
    {
      "id": 1,
      "value": "Gentileza",
      "question": "Um colega deixou cair os lapis no chao. O que demonstra gentileza?",
      "alternatives": [
        {
          "text": "Ajudar a recolher e entregar com cuidado.",
          "correct": true
        },
        {
          "text": "Rir e continuar andando.",
          "correct": false
        },
        {
          "text": "Esperar outra pessoa ajudar.",
          "correct": false
        },
        {
          "text": "Pegar um lapis para voce.",
          "correct": false
        }
      ],
      "explanation": "A gentileza aparece quando percebemos uma necessidade e fazemos algo bom sem esperar recompensa."
    },
    {
      "id": 2,
      "value": "Atencao",
      "question": "Durante uma explicacao, qual atitude ajuda a aprender melhor?",
      "alternatives": [
        {
          "text": "Escutar, olhar para quem fala e pensar no assunto.",
          "correct": true
        },
        {
          "text": "Conversar sobre outro tema.",
          "correct": false
        },
        {
          "text": "Responder antes de entender.",
          "correct": false
        },
        {
          "text": "Ficar mexendo nos materiais sem parar.",
          "correct": false
        }
      ],
      "explanation": "A atencao consciente une escuta, pensamento e vontade de compreender."
    },
    {
      "id": 3,
      "value": "Gratidao",
      "question": "Alguem te ajudou em uma tarefa dificil. O que combina com gratidao?",
      "alternatives": [
        {
          "text": "Agradecer e lembrar do bem recebido.",
          "correct": true
        },
        {
          "text": "Fingir que fez tudo sozinho.",
          "correct": false
        },
        {
          "text": "Dizer que a ajuda nao serviu.",
          "correct": false
        },
        {
          "text": "Pedir outra ajuda sem agradecer.",
          "correct": false
        }
      ],
      "explanation": "A gratidao reconhece o bem que recebemos e aproxima as pessoas."
    },
    {
      "id": 4,
      "value": "Respeito",
      "question": "Se um amigo pensa diferente de voce, qual e a melhor atitude?",
      "alternatives": [
        {
          "text": "Ouvir com calma e falar sem ofender.",
          "correct": true
        },
        {
          "text": "Interromper ate ele mudar de ideia.",
          "correct": false
        },
        {
          "text": "Dizer que so voce esta certo.",
          "correct": false
        },
        {
          "text": "Sair bravo sem conversar.",
          "correct": false
        }
      ],
      "explanation": "Respeitar nao significa concordar sempre, mas tratar o outro com consideracao."
    },
    {
      "id": 5,
      "value": "Colaboracao",
      "question": "Em um trabalho em grupo, como colaborar de verdade?",
      "alternatives": [
        {
          "text": "Fazer sua parte e ajudar o grupo a se organizar.",
          "correct": true
        },
        {
          "text": "Deixar tudo para os colegas.",
          "correct": false
        },
        {
          "text": "Mandar em todos sem escutar.",
          "correct": false
        },
        {
          "text": "Escolher so a parte mais facil e sumir.",
          "correct": false
        }
      ],
      "explanation": "Colaboracao e unir esforcos para alcancar um bem comum."
    },
    {
      "id": 6,
      "value": "Generosidade",
      "question": "Voce percebe que um colega esqueceu o lanche. O que pode ser generoso?",
      "alternatives": [
        {
          "text": "Oferecer uma parte, se for possivel, com alegria.",
          "correct": true
        },
        {
          "text": "Mostrar seu lanche para deixa-lo com vontade.",
          "correct": false
        },
        {
          "text": "Esconder o lanche de todos.",
          "correct": false
        },
        {
          "text": "Dizer que o problema nao e seu.",
          "correct": false
        }
      ],
      "explanation": "Generosidade e compartilhar algo bom quando podemos ajudar."
    },
    {
      "id": 7,
      "value": "Empatia",
      "question": "Uma crianca nova chegou a turma e parece timida. O que mostra empatia?",
      "alternatives": [
        {
          "text": "Convida-la para brincar e explicar como a turma funciona.",
          "correct": true
        },
        {
          "text": "Ignorar porque ela ainda nao tem amigos.",
          "correct": false
        },
        {
          "text": "Fazer perguntas para deixa-la sem graca.",
          "correct": false
        },
        {
          "text": "Esperar que ela se vire sozinha.",
          "correct": false
        }
      ],
      "explanation": "Empatia e tentar perceber como o outro se sente e agir com cuidado."
    },
    {
      "id": 8,
      "value": "Esforco",
      "question": "Voce errou uma atividade. Qual pensamento ajuda mais?",
      "alternatives": [
        {
          "text": "Posso tentar de novo e aprender com o erro.",
          "correct": true
        },
        {
          "text": "Nunca vou conseguir.",
          "correct": false
        },
        {
          "text": "Vou esconder para ninguem ver.",
          "correct": false
        },
        {
          "text": "A culpa e sempre dos outros.",
          "correct": false
        }
      ],
      "explanation": "O esforco transforma dificuldades em oportunidades de crescimento."
    },
    {
      "id": 9,
      "value": "Aprendizagem",
      "question": "O que e aprender de forma consciente?",
      "alternatives": [
        {
          "text": "Entender, praticar e usar o que aprendeu para fazer melhor.",
          "correct": true
        },
        {
          "text": "Decorar sem pensar.",
          "correct": false
        },
        {
          "text": "Copiar respostas depressa.",
          "correct": false
        },
        {
          "text": "Estudar so quando alguem manda.",
          "correct": false
        }
      ],
      "explanation": "A aprendizagem consciente envolve pensar sobre o que se aprende."
    },
    {
      "id": 10,
      "value": "Gentileza",
      "question": "Na fila, alguem empurrou sem querer. Qual resposta e mais gentil?",
      "alternatives": [
        {
          "text": "Dizer com calma: tudo bem, vamos cuidar do espaco.",
          "correct": true
        },
        {
          "text": "Empurrar de volta.",
          "correct": false
        },
        {
          "text": "Gritar para todos ouvirem.",
          "correct": false
        },
        {
          "text": "Guardar raiva o dia inteiro.",
          "correct": false
        }
      ],
      "explanation": "A gentileza tambem aparece quando respondemos com equilibrio."
    },
    {
      "id": 11,
      "value": "Atencao",
      "question": "Antes de atravessar uma rua com um adulto, o que e importante fazer?",
      "alternatives": [
        {
          "text": "Parar, olhar, escutar e seguir com cuidado.",
          "correct": true
        },
        {
          "text": "Correr sem olhar.",
          "correct": false
        },
        {
          "text": "Atravessar olhando para o celular.",
          "correct": false
        },
        {
          "text": "Ir porque outros foram.",
          "correct": false
        }
      ],
      "explanation": "A atencao protege e ajuda a escolher o momento certo."
    },
    {
      "id": 12,
      "value": "Gratidao",
      "question": "Qual frase expressa gratidao de forma sincera?",
      "alternatives": [
        {
          "text": "Obrigado por me ajudar, isso foi importante para mim.",
          "correct": true
        },
        {
          "text": "Ate que enfim voce ajudou.",
          "correct": false
        },
        {
          "text": "Eu merecia mesmo essa ajuda.",
          "correct": false
        },
        {
          "text": "Da proxima vez faca mais rapido.",
          "correct": false
        }
      ],
      "explanation": "Palavras sinceras mostram que percebemos o valor do gesto recebido."
    },
    {
      "id": 13,
      "value": "Respeito",
      "question": "Na biblioteca, algumas pessoas estao lendo. O que demonstra respeito?",
      "alternatives": [
        {
          "text": "Falar baixo e cuidar dos livros.",
          "correct": true
        },
        {
          "text": "Correr entre as mesas.",
          "correct": false
        },
        {
          "text": "Rabiscar uma pagina.",
          "correct": false
        },
        {
          "text": "Colocar musica alta.",
          "correct": false
        }
      ],
      "explanation": "Respeitar o ambiente ajuda todos a aproveitarem melhor o lugar."
    },
    {
      "id": 14,
      "value": "Colaboracao",
      "question": "A sala precisa ficar organizada depois de uma atividade. O que fazer?",
      "alternatives": [
        {
          "text": "Guardar materiais e ajudar quem ainda esta terminando.",
          "correct": true
        },
        {
          "text": "Sair correndo para nao ajudar.",
          "correct": false
        },
        {
          "text": "Esperar so o professor arrumar.",
          "correct": false
        },
        {
          "text": "Baguncar outra mesa.",
          "correct": false
        }
      ],
      "explanation": "Colaborar e perceber que o cuidado com o ambiente e responsabilidade de todos."
    },
    {
      "id": 15,
      "value": "Generosidade",
      "question": "Uma amiga nao entendeu a brincadeira. O que e generoso?",
      "alternatives": [
        {
          "text": "Explicar com paciencia para ela participar.",
          "correct": true
        },
        {
          "text": "Dizer que ela atrapalha.",
          "correct": false
        },
        {
          "text": "Mudar as regras sem avisar.",
          "correct": false
        },
        {
          "text": "Rir quando ela erra.",
          "correct": false
        }
      ],
      "explanation": "Generosidade tambem e oferecer tempo, paciencia e conhecimento."
    },
    {
      "id": 16,
      "value": "Empatia",
      "question": "Um colega esta triste porque perdeu um jogo. Como agir com empatia?",
      "alternatives": [
        {
          "text": "Ficar perto, escutar e incentivar uma nova tentativa.",
          "correct": true
        },
        {
          "text": "Dizer que ele e ruim no jogo.",
          "correct": false
        },
        {
          "text": "Comemorar para deixa-lo pior.",
          "correct": false
        },
        {
          "text": "Contar para todos que ele chorou.",
          "correct": false
        }
      ],
      "explanation": "Empatia e acolher o sentimento do outro sem humilhar."
    },
    {
      "id": 17,
      "value": "Esforco",
      "question": "Voce quer melhorar a leitura. Qual plano mostra esforco?",
      "alternatives": [
        {
          "text": "Ler um pouco todos os dias e pedir ajuda quando precisar.",
          "correct": true
        },
        {
          "text": "Esperar melhorar sem praticar.",
          "correct": false
        },
        {
          "text": "Escolher sempre nao ler.",
          "correct": false
        },
        {
          "text": "Desistir no primeiro texto dificil.",
          "correct": false
        }
      ],
      "explanation": "O esforco fica mais forte quando vira habito."
    },
    {
      "id": 18,
      "value": "Aprendizagem",
      "question": "Depois de aprender algo novo, o que ajuda a fixar melhor?",
      "alternatives": [
        {
          "text": "Conversar sobre o que entendeu e praticar.",
          "correct": true
        },
        {
          "text": "Fechar o caderno e nunca mais olhar.",
          "correct": false
        },
        {
          "text": "Guardar duvida para sempre.",
          "correct": false
        },
        {
          "text": "Dizer que ja sabe tudo.",
          "correct": false
        }
      ],
      "explanation": "Rever, praticar e explicar ajudam o conhecimento a crescer."
    },
    {
      "id": 19,
      "value": "Gentileza",
      "question": "Qual gesto simples pode melhorar o dia de alguem?",
      "alternatives": [
        {
          "text": "Cumprimentar com alegria e oferecer ajuda quando possivel.",
          "correct": true
        },
        {
          "text": "Fingir que nao viu a pessoa.",
          "correct": false
        },
        {
          "text": "Fazer uma critica sem necessidade.",
          "correct": false
        },
        {
          "text": "Tomar o lugar de alguem.",
          "correct": false
        }
      ],
      "explanation": "Muitas gentilezas sao pequenas, mas seu efeito pode ser grande."
    },
    {
      "id": 20,
      "value": "Respeito",
      "question": "Quando alguem esta falando em uma roda de conversa, o que e respeitoso?",
      "alternatives": [
        {
          "text": "Esperar a vez e ouvir ate o fim.",
          "correct": true
        },
        {
          "text": "Falar mais alto para aparecer.",
          "correct": false
        },
        {
          "text": "Mudar de assunto sem escutar.",
          "correct": false
        },
        {
          "text": "Imitar a pessoa para fazer graca.",
          "correct": false
        }
      ],
      "explanation": "Ouvir ate o fim mostra consideracao e ajuda o dialogo."
    }
  ]
};

const state = {
  questions: [],
  index: 0,
  score: 0,
  values: [],
  currentQuestion: null
};

const screens = {
  home: document.querySelector("#home"),
  quiz: document.querySelector("#quiz"),
  feedback: document.querySelector("#feedback"),
  final: document.querySelector("#final")
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
}

function startQuiz() {
  state.questions = shuffle(quizData.questions).slice(0, 10);
  state.index = 0;
  state.score = 0;
  state.values = [];
  renderQuestion();
}

function renderQuestion() {
  state.currentQuestion = state.questions[state.index];
  document.querySelector("#questionNumber").textContent = `Pergunta ${state.index + 1}/10`;
  document.querySelector("#score").textContent = `Estrelas: ${state.score}`;
  document.querySelector("#progressBar").style.width = `${((state.index + 1) / 10) * 100}%`;
  document.querySelector("#questionText").textContent = state.currentQuestion.question;

  const answers = document.querySelector("#answers");
  answers.innerHTML = "";
  shuffle(state.currentQuestion.alternatives).forEach(alternative => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = alternative.text;
    button.addEventListener("click", () => answerQuestion(alternative));
    answers.appendChild(button);
  });
  showScreen("quiz");
}

function answerQuestion(alternative) {
  if (alternative.correct) {
    state.score += 1;
    if (!state.values.includes(state.currentQuestion.value)) {
      state.values.push(state.currentQuestion.value);
    }
  }
  document.querySelector("#feedbackTitle").textContent = alternative.correct
    ? "Muito bem!"
    : "Boa tentativa! Vamos aprender juntos!";
  document.querySelector("#explanation").textContent = state.currentQuestion.explanation;
  document.querySelector("#nextBtn").textContent = state.index < 9 ? "Proxima descoberta" : "Ver tesouros";
  showScreen("feedback");
}

function nextStep() {
  if (state.index < 9) {
    state.index += 1;
    renderQuestion();
    return;
  }
  renderFinal();
}

function finalMessage(score) {
  if (score <= 3) return "Voce comecou sua jornada!";
  if (score <= 6) return "Voce esta descobrindo muitos tesouros!";
  if (score <= 8) return "Excelente observador!";
  if (score === 9) return "Grande descobridor de valores!";
  return "Mestre dos Tesouros da Gentileza!";
}

function renderFinal() {
  const percent = Math.round((state.score / 10) * 100);
  document.querySelector("#finalScore").textContent = `${state.score} estrelas - ${percent}% de acerto`;
  document.querySelector("#finalMessage").textContent = finalMessage(state.score);

  const values = document.querySelector("#values");
  values.innerHTML = "";
  const found = state.values.length ? state.values : ["Atencao", "Esforco", "Aprendizagem"];
  found.forEach(value => {
    const tag = document.createElement("span");
    tag.textContent = value;
    values.appendChild(tag);
  });
  showScreen("final");
}

function openHowToPlay() {
  const dialog = document.querySelector("#howDialog");
  if (dialog && typeof dialog.showModal === "function") {
    dialog.showModal();
    return;
  }
  alert("Leia cada pergunta com calma e escolha uma alternativa. Cada acerto vale uma estrela. Se errar, tudo bem: a aventura continua.");
}

function closeHowToPlay() {
  const dialog = document.querySelector("#howDialog");
  if (dialog && typeof dialog.close === "function") {
    dialog.close();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#startBtn").addEventListener("click", startQuiz);
  document.querySelector("#againBtn").addEventListener("click", startQuiz);
  document.querySelector("#homeBtn").addEventListener("click", () => showScreen("home"));
  document.querySelector("#nextBtn").addEventListener("click", nextStep);
  document.querySelector("#howBtn").addEventListener("click", openHowToPlay);
  document.querySelector("#closeHowBtn").addEventListener("click", closeHowToPlay);
});
