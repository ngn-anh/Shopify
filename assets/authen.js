document.addEventListener("DOMContentLoaded", function () {
  const getCodeBtn = document.querySelector("#getcodeBtn");
  const policy_agreement = document.querySelector('#policy_agreement');
  const registerBtn = document.querySelector("#registerBtn");

  policy_agreement.addEventListener("change", function () {
    if (this.checked) {
      // alert('Checkbox is checked!');
      registerBtn.disabled = false;
    }
    else {
      registerBtn.disabled = true;
    }
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
