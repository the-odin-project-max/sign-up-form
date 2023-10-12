function checkIdenticalPwd() {
	var pwd = document.getElementById("password");
	var pwdConfirm = document.getElementById("passwordConfirmed");
	if (pwd.value != pwdConfirm.value) {
		pwd.classList.add("invalid");
		pwdConfirm.classList.add("invalid");
		alert("Password and Confirm Password do not match!");
		return false;
	}
	return true;
}

function checkIfFormComplete() {
	var output = true;
	document.querySelectorAll("input").forEach(function (input) {
		if (input.value == "") {
			input.classList.add("invalid");
			output = false;
		}
	});
	return output;
}

document.getElementById("submit-form").addEventListener("click", function (e) {
	e.preventDefault();
	if (!checkIfFormComplete()) {
		alert("Please fill in all missing fields!");
		return;
	}

	if (checkIdenticalPwd()) {
		alert("Sign Up Successful!");
	}
});

document.querySelectorAll("input").forEach(function (input) {
	input.addEventListener("input", function () {
		this.classList.remove("invalid");
		// alert(input.parentElement);
	});

	input.addEventListener("valid", function () {
		this.classList.remove("invalid");
		this.classList.add("valid");
		// alert(input.parentElement);
	}
});