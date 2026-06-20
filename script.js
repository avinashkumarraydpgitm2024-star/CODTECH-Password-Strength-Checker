function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    let score = 0;

    // Check Length
    if (password.length >= 8) {
        score++;
    }

    // Check Uppercase
    if (/[A-Z]/.test(password)) {
        score++;
    }

    // Check Lowercase
    if (/[a-z]/.test(password)) {
        score++;
    }

    // Check Number
    if (/[0-9]/.test(password)) {
        score++;
    }

    // Check Special Character
    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }

    // Display Result
    if (score <= 2) {
        result.innerHTML = "❌ Weak Password";
        result.style.color = "red";
    } else if (score <= 4) {
        result.innerHTML = "⚠️ Medium Password";
        result.style.color = "orange";
    } else {
        result.innerHTML = "✅ Strong Password";
        result.style.color = "green";
    }
}
