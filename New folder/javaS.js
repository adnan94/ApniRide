function myfunc(){
	return FName()&&LName()&&Email();
}
function FName(){
	var firstName = document.ContactForm.fname;
	if(firstName.value == ""){
	alert("Fill the First Name");
	firstName.focus();
	return false;
}
	return true;

}
function LName(){
	var lastName = document.ContactForm.lname;
	if(lastName.value == ""){
	alert("Fill the Last Name");
	lastname.focus();
	return false;
}
	return true;
}
function Email(){
	var Email1 = document.ContactForm.email;
	if(Email1.value == ""){
	alert("Fill the First Name");
	Email1.focus();
	return false;
}
	return true;
}