import { registerUser, loginUser } from "./firebase.js";

// Signup Button Event (Agar aapke HTML me signup button ki id 'signup-btn' hai)
document.getElementById("signup-btn")?.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pw").value;
    await registerUser(email, password);
});

// Login Button Event (Agar login button ki id 'login-btn' hai)
document.getElementById("login-btn")?.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pw").value;
    await loginUser(email, password);
});

