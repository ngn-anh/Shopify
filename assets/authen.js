document.addEventListener("DOMContentLoaded", function () {
  const getCodeBtn = document.querySelector("#getcodeBtn");
  const policy_agreeement = document.querySelector('input[type="checkbox"]');
    const registerBtn = document.querySelector("#registerBtn");
    

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // alert('Checkbox is checked!');
            registerBtn.disabled = false;
        } 
        // else {
        //     alert('Checkbox is unchecked!');
        // }
    });
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