document.addEventListener("DOMContentLoaded", function () {
      
    const getCodeBtn = document.querySelector(".login-btn-container.login-btn");
    
    const checkbox = document.querySelector('input[type="checkbox"]');
    const reset_pass_checkbox = document.querySelector("#resett_pass_confirm");
    

    reset_pass_checkbox.addEventListener('change', function() {
        if (this.checked) {
            // alert('Checkbox is checked!');
            registerBtn.disabled = false;
            registerBtn.css({
                'color': 'red',
                'font-size': '20px',
                'background-color': 'yellow'
            });
        } 
        else {
            registerBtn.disabled = true;

        }
    });


    let policy_agreement = document.getElementById("policy_agreement");
    if (policy_agreement.checked == true) {
        alert(123);
    }
   

    getCodeBtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        loginForm = false;
        pwRecoverForm = false;
        additionalForm1 = true;
        additionalForm2 = false;
        alert("clicked get code");
    });
});
