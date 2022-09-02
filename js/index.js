const answer = prompt("What is the password?");

if (answer === "12345") {
    document.querySelector("main").innerHTML = "<p>Welcome, admin</p>";
}