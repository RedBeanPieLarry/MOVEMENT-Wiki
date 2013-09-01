function CheckFunc(){
	msg = "";
	if(document.forms[0].name.value == ""){
		msg = "Please complete all!";
	}
	else if(document.forms[0].email.value == ""){
		msg = "Please complete all!";
	}
	else if(document.forms[0].message.value == ""){
		msg = "Please complete all!";
	}
	else{
		return true;
	}
		alert(msg);
		return false;
	}
	console.log("Loded");  