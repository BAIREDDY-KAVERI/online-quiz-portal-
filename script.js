// LOGIN FUNCTION
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user !== "" && pass !== "") {
        alert("Login Successful!");
        window.location.href = "quiz.html";
        return false;
    }
}

// QUIZ FUNCTION
function submitQuiz() {
    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q1) score += parseInt(q1.value);
    if (q2) score += parseInt(q2.value);
    if (q3) score += parseInt(q3.value);

    document.getElementById("result").innerHTML =
        "Your Score: " + score + " / 3";
}