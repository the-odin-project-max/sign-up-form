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

document.getElementById("submit-form").addEventListener("click", function (e) {
	e.preventDefault();
	if (checkIdenticalPwd()) {
		alert("Sign Up Successful!");
	}
});

var test = document.getElementById("test");
test.stat

document.querySelectorAll("input").forEach(function (input) {
	input.addEventListener("focus", function () {
		this.classList.remove("invalid");
	});
});