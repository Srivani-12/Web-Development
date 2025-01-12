
const loginButton = document.getElementById("login");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

   
    const savedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!savedUserData) {
        alert("No user found. Please register first.");
        return;
    }

    const { username, password } = savedUserData;

    if (username === usernameInput && password === passwordInput) {
        alert(`Welcome, ${username}!`);
        window.location.href = "./mainPage.html";
    } else {
        alert("Incorrect username or password.");
    }
});
