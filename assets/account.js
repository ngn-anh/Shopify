document.addEventListener("DOMContentLoaded", function () {
    const reset_pass_checkbox = document.querySelector("#reset_pass_confirm");
    const account_agreement_checkbox = document.querySelector("#account_agreement_confirm");
  
    

    reset_pass_checkbox.addEventListener('change', function() {
        if (this.checked) {
            alert('Checkbox is checked!');
            
        } 
        else {
            

        }
    });


    account_agreement_checkbox.addEventListener('change', function() {
          if (this.checked) {
              alert('Checkbox is checked!');
              
          } 
          else {
              
  
          }
      });

});
