document.addEventListener("DOMContentLoaded", function () {
    const reset_pass_checkbox = document.querySelector("#reset_pass_confirm");
    const update_profile_btn = document.querySelector("#update_profile_btn")
    const account_agreement_checkbox = document.querySelector("#account_agreement_confirm");
    const current_password = document.querySelectorAll("#account_current_pass_input");
    const reset_password_input_container = document.querySelectorAll("#reset_password_input_container");

 

    reset_pass_checkbox.addEventListener('change', function() {
        if (this.checked) {
          current_password.forEach(a => {
              a.disabled = false;
          })
          
          reset_password_input_container.forEach(a => {
              a.style.opacity = '1';
          })
         
     
        } 
        else {
          current_password.forEach(a => {
              a.disabled = true;
          })
          reset_password_input_container.forEach(a => {
              a.style.opacity = '0.5';
          })

        }
    });


    account_agreement_checkbox.addEventListener('change', function() {
          if (this.checked) {
              // alert('Checkbox is checked!');
            update_profile_btn.disabled = false;
            update_profile_btn.style.opacity = '1';
          } 
          else {
            update_profile_btn.disabled = true;
            update_profile_btn.style.opacity = '0.5';
  
          }
      });

});
