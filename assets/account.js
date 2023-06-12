document.addEventListener("DOMContentLoaded", function () {
      
    const getCodeBtn = document.querySelector(".login-btn-container.login-btn");
    
    const checkbox = document.querySelector('input[type="checkbox"]');
    const reset_pass_checkbox = document.querySelector("#resett_pass_confirm");
    

    reset_pass_checkbox.addEventListener('change', function() {
        if (this.checked) {
            alert('Checkbox is checked!');
            
        } 
        else {
            

        }
    });


});
