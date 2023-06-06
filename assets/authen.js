document.addEventListener("DOMContentLoaded", function () {
  const getCodeBtn = document.querySelector("#getcodeBtn");
  let policy_agreement = document.getElementById("policy_agreement");
  if (policy_agreement.checked == true) {
    console.log(123);
  }
  getCodeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    //   loginForm = false;
    //   pwRecoverForm = false;
    //   additionalForm1 = true;
    //   additionalForm2 = false;

    //  let container = document.querySelector('[x-data]');

    // loginForm = false;
    // pwRecoverForm = false;
    // additionalForm1 = true;
    // additionalForm2 = false;
    // alert("123");
  });
});
$(function(){ $('#create_customer').submit(function(e) {
            if ($('input[name="customer[password]"]').val() != $('input[name="customer[password_confirmation]"]').val()) {
                alert('Passwords do not match.'); 
                return false; }
            }); 
          });

