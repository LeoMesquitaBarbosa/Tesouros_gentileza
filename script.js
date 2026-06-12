const quizData = {
  questions: [
    { id: 1, value: "Gentileza", question: "Um colega deixou cair os lápis no chão. O que demonstra gentileza?", alternatives: [{ text: "Ajudar a recolher e entregar com cuidado.", correct: true }, { text: "Rir e continuar andando.", correct: false }, { text: "Esperar outra pessoa ajudar.", correct: false }, { text: "Pegar um lápis para você.", correct: false }], explanation: "A gentileza aparece quando percebemos uma necessidade e fazemos algo bom sem esperar recompensa.", reflection: "Observar o outro com atenção ajuda a escolher atitudes melhores." },
    { id: 2, value: "Atenção", question: "Durante uma explicação, qual atitude ajuda a aprender melhor?", alternatives: [{ text: "Escutar, olhar para quem fala e pensar no assunto.", correct: true }, { text: "Conversar sobre outro tema.", correct: false }, { text: "Responder antes de entender.", correct: false }, { text: "Ficar mexendo nos materiais sem parar.", correct: false }], explanation: "A atenção consciente une escuta, pensamento e vontade de compreender.", reflection: "Quando cuidamos da atenção, a aprendizagem fica mais clara." },
    { id: 3, value: "Gratidão", question: "Alguém te ajudou em uma tarefa difícil. O que combina com gratidão?", alternatives: [{ text: "Agradecer e lembrar do bem recebido.", correct: true }, { text: "Fingir que fez tudo sozinho.", correct: false }, { text: "Dizer que a ajuda não serviu.", correct: false }, { text: "Pedir outra ajuda sem agradecer.", correct: false }], explanation: "A gratidão reconhece o bem que recebemos e aproxima as pessoas.", reflection: "Ser grato ilumina o pensamento e valoriza as boas ações." },
    { id: 4, value: "Respeito", question: "Se um amigo pensa diferente de você, qual é a melhor atitude?", alternatives: [{ text: "Ouvir com calma e falar sem ofender.", correct: true }, { text: "Interromper até ele mudar de ideia.", correct: false }, { text: "Dizer que só você está certo.", correct: false }, { text: "Sair bravo sem conversar.", correct: false }], explanation: "Respeitar não significa concordar sempre, mas tratar o outro com consideração.", reflection: "O respeito ajuda a convivência e fortalece a amizade." },
    { id: 5, value: "Colaboração", question: "Em um trabalho em grupo, como colaborar de verdade?", alternatives: [{ text: "Fazer sua parte e ajudar o grupo a se organizar.", correct: true }, { text: "Deixar tudo para os colegas.", correct: false }, { text: "Mandar em todos sem escutar.", correct: false }, { text: "Escolher só a parte mais fácil e sumir.", correct: false }], explanation: "Colaboração é unir esforços para alcançar um bem comum.", reflection: "Quando cada um contribui, todos aprendem mais." },
    { id: 6, value: "Generosidade", question: "Você percebe que um colega esqueceu o lanche. O que pode ser generoso?", alternatives: [{ text: "Oferecer uma parte, se for possível, com alegria.", correct: true }, { text: "Mostrar seu lanche para deixá-lo com vontade.", correct: false }, { text: "Esconder o lanche de todos.", correct: false }, { text: "Dizer que o problema não é seu.", correct: false }], explanation: "Generosidade é compartilhar algo bom quando podemos ajudar.", reflection: "Um gesto simples pode tornar o dia de alguém melhor." },
    { id: 7, value: "Empatia", question: "Uma criança nova chegou à turma e parece tímida. O que mostra empatia?", alternatives: [{ text: "Convidá-la para brincar e explicar como a turma funciona.", correct: true }, { text: "Ignorar porque ela ainda não tem amigos.", correct: false }, { text: "Fazer perguntas para deixá-la sem graça.", correct: false }, { text: "Esperar que ela se vire sozinha.", correct: false }], explanation: "Empatia é tentar perceber como o outro se sente e agir com cuidado.", reflection: "A compreensão abre portas para novas amizades." },
    { id: 8, value: "Esforço", question: "Você errou uma atividade. Qual pensamento ajuda mais?", alternatives: [{ text: "Posso tentar de novo e aprender com o erro.", correct: true }, { text: "Nunca vou conseguir.", correct: false }, { text: "Vou esconder para ninguém ver.", correct: false }, { text: "A culpa é sempre dos outros.", correct: false }], explanation: "O esforço transforma dificuldades em oportunidades de crescimento.", reflection: "Aprender exige paciência, tentativa e observação." },
    { id: 9, value: "Aprendizagem", question: "O que é aprender de forma consciente?", alternatives: [{ text: "Entender, praticar e usar o que aprendeu para fazer melhor.", correct: true }, { text: "Decorar sem pensar.", correct: false }, { text: "Copiar respostas depressa.", correct: false }, { text: "Estudar só quando alguém manda.", correct: false }], explanation: "A aprendizagem consciente envolve pensar sobre o que se aprende.", reflection: "Quando entendemos o motivo das ações, podemos escolher melhor." },
    { id: 10, value: "Gentileza", question: "Na fila, alguém empurrou sem querer. Qual resposta é mais gentil?", alternatives: [{ text: "Dizer com calma: tudo bem, vamos cuidar do espaço.", correct: true }, { text: "Empurrar de volta.", correct: false }, { text: "Gritar para todos ouvirem.", correct: false }, { text: "Guardar raiva o dia inteiro.", correct: false }], explanation: "A gentileza também aparece quando respondemos com equilíbrio.", reflection: "A calma ajuda a mente a encontrar uma atitude melhor." },
    { id: 11, value: "Atenção", question: "Antes de atravessar uma rua com um adulto, o que é importante fazer?", alternatives: [{ text: "Parar, olhar, escutar e seguir com cuidado.", correct: true }, { text: "Correr sem olhar.", correct: false }, { text: "Atravessar olhando para o celular.", correct: false }, { text: "Ir porque outros foram.", correct: false }], explanation: "A atenção protege e ajuda a escolher o momento certo.", reflection: "Cuidar da atenção é cuidar de si e dos outros." },
    { id: 12, value: "Gratidão", question: "Qual frase expressa gratidão de forma sincera?", alternatives: [{ text: "Obrigado por me ajudar, isso foi importante para mim.", correct: true }, { text: "Até que enfim você ajudou.", correct: false }, { text: "Eu merecia mesmo essa ajuda.", correct: false }, { text: "Da próxima vez faça mais rápido.", correct: false }], explanation: "Palavras sinceras mostram que percebemos o valor do gesto recebido.", reflection: "A gratidão educa o coração e melhora a convivência." },
    { id: 13, value: "Respeito", question: "Na biblioteca, algumas pessoas estão lendo. O que demonstra respeito?", alternatives: [{ text: "Falar baixo e cuidar dos livros.", correct: true }, { text: "Correr entre as mesas.", correct: false }, { text: "Rabiscar uma página.", correct: false }, { text: "Colocar música alta.", correct: false }], explanation: "Respeitar o ambiente ajuda todos a aproveitarem melhor o lugar.", reflection: "Cada espaço pede atitudes adequadas." },
    { id: 14, value: "Colaboração", question: "A sala precisa ficar organizada depois de uma atividade. O que fazer?", alternatives: [{ text: "Guardar materiais e ajudar quem ainda está terminando.", correct: true }, { text: "Sair correndo para não ajudar.", correct: false }, { text: "Esperar só o professor arrumar.", correct: false }, { text: "Bagunçar outra mesa.", correct: false }], explanation: "Colaborar é perceber que o cuidado com o ambiente é responsabilidade de todos.", reflection: "Pequenas ações somadas produzem grandes resultados." },
    { id: 15, value: "Generosidade", question: "Uma amiga não entendeu a brincadeira. O que é generoso?", alternatives: [{ text: "Explicar com paciência para ela participar.", correct: true }, { text: "Dizer que ela atrapalha.", correct: false }, { text: "Mudar as regras sem avisar.", correct: false }, { text: "Rir quando ela erra.", correct: false }], explanation: "Generosidade também é oferecer tempo, paciência e conhecimento.", reflection: "Ensinar com carinho ajuda o outro e fortalece quem ensina." },
    { id: 16, value: "Empatia", question: "Um colega está triste porque perdeu um jogo. Como agir com empatia?", alternatives: [{ text: "Ficar perto, escutar e incentivar uma nova tentativa.", correct: true }, { text: "Dizer que ele é ruim no jogo.", correct: false }, { text: "Comemorar para deixá-lo pior.", correct: false }, { text: "Contar para todos que ele chorou.", correct: false }], explanation: "Empatia é acolher o sentimento do outro sem humilhar.", reflection: "Todos precisamos de compreensão em algum momento." },
    { id: 17, value: "Esforço", question: "Você quer melhorar a leitura. Qual plano mostra esforço?", alternatives: [{ text: "Ler um pouco todos os dias e pedir ajuda quando precisar.", correct: true }, { text: "Esperar melhorar sem praticar.", correct: false }, { text: "Escolher sempre não ler.", correct: false }, { text: "Desistir no primeiro texto difícil.", correct: false }], explanation: "O esforço fica mais forte quando vira hábito.", reflection: "Um pequeno passo repetido pode abrir grandes caminhos." },
    { id: 18, value: "Aprendizagem", question: "Depois de aprender algo novo, o que ajuda a fixar melhor?", alternatives: [{ text: "Conversar sobre o que entendeu e praticar.", correct: true }, { text: "Fechar o caderno e nunca mais olhar.", correct: false }, { text: "Guardar dúvida para sempre.", correct: false }, { text: "Dizer que já sabe tudo.", correct: false }], explanation: "Rever, praticar e explicar ajudam o conhecimento a crescer.", reflection: "Quem aprende com consciência continua aprendendo fora da aula." },
    { id: 19, value: "Gentileza", question: "Qual gesto simples pode melhorar o dia de alguém?", alternatives: [{ text: "Cumprimentar com alegria e oferecer ajuda quando possível.", correct: true }, { text: "Fingir que não viu a pessoa.", correct: false }, { text: "Fazer uma crítica sem necessidade.", correct: false }, { text: "Tomar o lugar de alguém.", correct: false }], explanation: "Muitas gentilezas são pequenas, mas seu efeito pode ser grande.", reflection: "O bem começa em escolhas simples do dia a dia." },
    { id: 20, value: "Respeito", question: "Quando alguém está falando em uma roda de conversa, o que é respeitoso?", alternatives: [{ text: "Esperar a vez e ouvir até o fim.", correct: true }, { text: "Falar mais alto para aparecer.", correct: false }, { text: "Mudar de assunto sem escutar.", correct: false }, { text: "Imitar a pessoa para fazer graça.", correct: false }], explanation: "Ouvir até o fim mostra consideração e ajuda o diálogo.", reflection: "A palavra do outro merece atenção, assim como a nossa." }
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
    ? "⭐ Muito bem!"
    : "🌱 Boa tentativa! Vamos aprender juntos!";
  document.querySelector("#explanation").textContent = state.currentQuestion.explanation;
  document.querySelector("#reflection").textContent = state.currentQuestion.reflection;
  document.querySelector("#nextBtn").textContent = state.index < 9 ? "Próxima descoberta" : "Ver tesouros";
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
  if (score <= 3) return "Você começou sua jornada!";
  if (score <= 6) return "Você está descobrindo muitos tesouros!";
  if (score <= 8) return "Excelente observador!";
  if (score === 9) return "Grande descobridor de valores!";
  return "Mestre dos Tesouros da Gentileza!";
}

function renderFinal() {
  const percent = Math.round((state.score / 10) * 100);
  document.querySelector("#finalScore").textContent = `${state.score} estrelas • ${percent}% de acerto`;
  document.querySelector("#finalMessage").textContent = finalMessage(state.score);

  const values = document.querySelector("#values");
  values.innerHTML = "";
  const found = state.values.length ? state.values : ["Atenção", "Esforço", "Aprendizagem"];
  found.forEach(value => {
    const tag = document.createElement("span");
    tag.textContent = value;
    values.appendChild(tag);
  });
  showScreen("final");
}

document.querySelector("#startBtn").addEventListener("click", startQuiz);
document.querySelector("#againBtn").addEventListener("click", startQuiz);
document.querySelector("#homeBtn").addEventListener("click", () => showScreen("home"));
document.querySelector("#nextBtn").addEventListener("click", nextStep);

const dialog = document.querySelector("#howDialog");
document.querySelector("#howBtn").addEventListener("click", () => dialog.showModal());
document.querySelector("#closeHowBtn").addEventListener("click", () => dialog.close());
