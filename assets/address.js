document.addEventListener('DOMContentLoaded', () => {
		let deleteBtn = document.querySelectorAll("#deleteAddressBtn");
		let chooseAllCheckBox = document.querySelector('input[id=chooseAllCheckbox]');
		let checkedBox = document.querySelector('#chooseAllCheckbox');
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