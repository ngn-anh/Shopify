document.addEventListener('DOMContentLoaded', function() {
    const getCodeBtn = document.querySelector("#getcodeBtn");
    getCodeBtn.addEventListener("click", () => {
        event.preventDefault(); 
        loginForm = true;
        pwRecoverForm = false;
        alert("clicked get code");
    });
});