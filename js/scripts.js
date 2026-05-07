function showHint() {
    alert("Hint: strong early lane play means safe soul collection and smart positioning.");
}

var quizForm = document.getElementById("quizForm");

if (quizForm) {
    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var ready = confirm("Submit your Deadlock quiz answers?");

        if (ready) {
            var score = 0;

            if (document.getElementById("q1-souls").checked) {
                score++;
            }

            if (document.getElementById("q2-timing").checked) {
                score++;
            }

            if (document.getElementById("q3-team").checked) {
                score++;
            }

            alert("Quiz submitted. Your score is " + score + " out of 3.");
            quizForm.reset();
        }
    });
}
