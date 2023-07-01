document.addEventListener("DOMContentLoaded", function () {
    let delete_form = document.forms['delete-address-form'];
    let deleteBtn = document.querySelectorAll("#deleteAddressBtn");
    let deleteAllBtn = document.querySelector("#deleteAllBtn");

    deleteBtn.forEach(btn => btn.addEventListener('click', (event) => {
        let id = event.currentTarget;
        let data_id = id.getAttribute('data-id');

        let confirmDelete = document.querySelector('#deleteAddressConfirm');
        confirmDelete.addEventListener('click', () => {
            delete_form.action = "/account/addresses/" +data_id;
            delete_form.submit();
        });


    }));
      // Get the div element
    const myDiv = document.getElementById('myDiv');
    
    // Store the value in JavaScript
    const myValue = 'Hello, World!';
    
    // Set the value as the content of the div
    myDiv.textContent = myValue;
});