/* Add your JavaScript to this file */
window.onload = function () {
	var subbtn = document.getElementsByTagName("button")[0];
	subbtn.addEventListener("click", email_Submit);
};
function email_Submit(e) {
	e.preventDefault();
	let submission = document.getElementById("email").value;
	let msg = document.getElementsByClassName("message")[0];
	if (ValidateEmail(submission)) {
		msg.textContent =
			"Thank you! Your email address " +
			submission +
			" has been added to our mailing list!";
	} else {
		msg.textContent = "Please enter a valid email";
	}
}

function ValidateEmail(inputText) {
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (inputText.match(mailformat)) {
		return true;
	} else {
		return false;
	}
}
