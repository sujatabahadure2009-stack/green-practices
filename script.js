const questions = [
    {
        question: "Which practice saves more energy in IT systems?",
        options: [
            "Leaving computers ON all day",
            "Using power-saving and sleep modes"
        ],
        correct: 1
    },
    {
        question: "Which is a green data center practice?",
        options: [
            "Using renewable energy sources",
            "Running servers at maximum power always"
        ],
        correct: 0
    },
    {
        question: "What reduces carbon footprint in IT?",
        options: [
            "Frequent hardware replacement",
            "Virtualization and cloud optimization"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.querySelectorAll("button")[0].innerText = q.options[0];
    document.querySelectorAll("button")[1].innerText = q.options[1];
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        score += 10;
        document.getElementById("feedback").innerText = "✅ Correct! Sustainable choice.";
    } else {
        document.getElementById("feedback").innerText = "❌ Incorrect. Think green!";
    }

    document.getElementById("score").innerText = score;
    updateBadge();

    currentQuestion++;
    if (currentQuestion < questions.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        document.getElementById("question").innerText =
            "🎉 Game Over! You promoted green computing!";
    }
}

function updateBadge() {
    let badge = "None";
    if (score >= 20) badge = "🌟 Green Advocate";
    if (score >= 30) badge = "🏆 Sustainability Champion";
    document.getElementById("badge").innerText = badge;
}

loadQuestion();
