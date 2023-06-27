document.addEventListener('DOMContentLoaded', () => {
  		let delete_form = document.forms['delete-address-form'];
		let deleteBtn = document.querySelectorAll("#deleteAddressBtn");
		let deleteAllBtn = document.querySelector("#deleteAllBtn");


		deleteBtn.forEach(btn => btn.addEventListener('click', (event) => {
			let id = event.currentTarget;
			let data_id = id.getAttribute('data-id');

			let confirmDelete = document.querySelector('#deleteAddressConfirm');
			confirmDelete.addEventListener('click', () => {
                alert(123);
				delete_form.action = "/account/addresses/" +data_id;
				delete_form.submit();
			});


}));