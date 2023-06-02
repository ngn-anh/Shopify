document.addEventListener('DOMContentLoaded', function() {
    const getCodeBtn = document.querySelector("#getcodeBtn");
    getCodeBtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        loginForm = false;
        pwRecoverForm = false;
        additionalForm1 = true;
        additionalForm2 = false;


      Alpine.data(document.querySelector('[x-data]')).loginForm = false;
      Alpine.data(document.querySelector('[x-data]')).pwRecoverForm = false;
      Alpine.data(document.querySelector('[x-data]')).additionalForm1 = true;
      Alpine.data(document.querySelector('[x-data]')).additionalForm2 = false;
        
    });
});