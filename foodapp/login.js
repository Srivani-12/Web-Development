
const registerButton = document.getElementById("register");
const signinButton = document.getElementById("signin");


registerButton.addEventListener("click", (e) => {
    e.preventDefault();


    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm").value.trim();


    if (!username || !email || !password || !confirmPassword) {
        alert("Please make sure to fill out all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

   
    localStorage.setItem("userData", JSON.stringify({ username, email, password }));
    alert("Registration successful!");
    window.location.href = "./mainPage.html";
});


signinButton.addEventListener("click", () => {
    window.location.href = "./signinPage.html";
});







