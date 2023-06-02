document.addEventListener('DOMContentLoaded', function() {
    const getCodeBtn = document.querySelector("#getcodeBtn");
    getCodeBtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        loginForm = false;
        pwRecoverForm = false;
        additionalForm1 = true;
        additionalForm2 = false;


       let container = document.querySelector('[x-data]');


      loginForm = false;
      pwRecoverForm = false;
      additionalForm1 = true;
      additionalForm2 = false;
        
    });
});