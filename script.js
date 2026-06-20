function checkPassword() {

    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    let fill = document.getElementById("strength-fill");

    let score = 0;

    if(password.length >= 8) score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[a-z]/.test(password)) score++;
    if(/[0-9]/.test(password)) score++;
    if(/[^A-Za-z0-9]/.test(password)) score++;

    if(score <= 2){
        result.innerHTML = "❌ Weak Password";
        result.style.color = "red";
        fill.style.width = "33%";
        fill.style.background = "red";
    }
    else if(score <= 4){
        result.innerHTML = "⚠️ Medium Password";
        result.style.color = "orange";
        fill.style.width = "66%";
        fill.style.background = "orange";
    }
    else{
        result.innerHTML = "✅ Strong Password";
        result.style.color = "green";
        fill.style.width = "100%";
        fill.style.background = "green";
    }
}

function togglePassword(){

    let password = document.getElementById("password");
    let btn = document.getElementById("toggleBtn");

    if(password.type === "password"){
        password.type = "text";
        btn.innerHTML = "Hide";
    }
    else{
        password.type = "password";
        btn.innerHTML = "Show";
    }
}
