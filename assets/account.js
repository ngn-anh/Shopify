document.addEventListener("DOMContentLoaded", function () {
    const reset_pass_checkbox = document.querySelector("#reset_pass_confirm");
    const update_profile_btn = document.querySelector("#update_profile_btn")
    const account_agreement_checkbox = document.querySelector("#account_agreement_confirm");
    const current_password = document.querySelector("#account_current_pass_input");
  
  
    

    reset_pass_checkbox.addEventListener('change', function() {
        if (this.checked) {
            alert('Checkbox is checked!');
          current_password.disabled = false;
     
        } 
        else {
            current_password.disabled = true;

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
