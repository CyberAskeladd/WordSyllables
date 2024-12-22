const words = [
    { word: "نُورَةُ", syllables: ["نو", "ر", "ة"] },
    { word: "طَارِقٌ", syllables: ["طا", "ر", "ق"] },
    { word: "مَنْزِلُ", syllables: ["من", "ز", "ل"] },
    { word: "قَرِيبٌ", syllables: ["ق", "ري", "ب"] }
];
let currentWord = null;

function loadNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    document.getElementById("word").textContent = currentWord.word;

    const syllableInputs = document.getElementById("syllable-inputs");
    syllableInputs.innerHTML = ""; // Clear previous inputs
    currentWord.syllables.forEach(() => {
        const input = document.createElement("input");
        input.type = "text";
        input.className = "syllable-box";
        input.maxLength = 3;
        input.placeholder = "ـ";
        input.style.textAlign = "right";
        syllableInputs.appendChild(input);
    });

    document.getElementById("feedback").textContent = ""; // Clear feedback
}

function submitAnswer() {
    const inputs = document.querySelectorAll(".syllable-box");
    const userAnswer = Array.from(inputs).map(input => input.value.trim());
    const feedback = document.getElementById("feedback");

    const isCorrect = userAnswer.every((syllable, index) => {
        return syllable === currentWord.syllables[index];
    });

    if (isCorrect) {
        feedback.textContent = "إجابة صحيحة! 🎉";
        feedback.className = "correct";
    } else {
        feedback.textContent = "حاول مرة أخرى!";
        feedback.className = "incorrect";
    }
}

// Load the first word on page load
loadNewWord();
