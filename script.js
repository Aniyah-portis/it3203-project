function gradeQuiz() {
    let score = 0;
    let results = "";

    // Q1
    let q1 = document.querySelector('input[name="q1"]:checked');

if (q1 && q1.value === "Tim Berners-Lee") {
    score++;
    results += "<p><strong>Q1:</strong> Correct</p>";
} else {
    results += "<p><strong>Q1:</strong> Incorrect</p>";
}

    // Q2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "HTTP") {
        score++;
        results += "<p><strong>Q2:</strong> <span style='color:green;'>Correct</span></p>";
    } else {
        results += "<p><strong>Q2:</strong> <span style='color:red;'>Incorrect</span> (Answer: HTTP)</p>";
    }

    // Q3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "V8") {
        score++;
        results += "<p><strong>Q3:</strong> <span style='color:green;'>Correct</span></p>";
    } else {
        results += "<p><strong>Q3:</strong> <span style='color:red;'>Incorrect</span> (Answer: V8 Engine)</p>";
    }

    // Q4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "Multiprocess") {
        score++;
        results += "<p><strong>Q4:</strong> <span style='color:green;'>Correct</span></p>";
    } else {
        results += "<p><strong>Q4:</strong> <span style='color:red;'>Incorrect</span> (Answer: Multi-process tabs)</p>";
    }

    // Q5 (multi-select)
    let q5 = document.querySelectorAll('input[name="q5"]:checked');
    let answers = Array.from(q5).map(cb => cb.value);

    if (answers.includes("Sandboxing") && answers.includes("Encryption") && answers.length === 2) {
        score++;
        results += "<p><strong>Q5:</strong> <span style='color:green;'>Correct</span></p>";
    } else {
        results += "<p><strong>Q5:</strong> <span style='color:red;'>Incorrect</span> (Answers: Sandboxing & Encryption)</p>";
    }

    // Final Score + Pass/Fail
    let final = `<h2>Your Score: ${score}/5</h2>`;
    final += score >= 3 
        ? "<h3 style='color:green;'>PASS</h3>" 
        : "<h3 style='color:red;'>FAIL</h3>";

    document.getElementById("results").innerHTML = final + results;
}