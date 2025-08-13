function validEmail(str) {
  //your JS code here.
	if (!str) return false;

const emailRegex = /^[\w.-]+@[\w-]+(\.[\w-]+)*\.[A-Za-z]{2,}$/;

    return emailRegex.test(str);
}
// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
