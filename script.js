function validateform(event) {
  event.preventDefault();
  regisform = document.getElementById("regisform");
  Name = document.getElementById("Name");
  password = document.getElementById("password");
  confirmpass = document.getElementById("Confirm");
  date = document.getElementById("date");
  male = document.getElementById("male");
  female = document.getElementById("female");
  agree = document.getElementById("agree");

  // const error = document.getElementsByClassName("error");

  console.log(Name);
  console.log(password);

  let nameValue = Name.value;
  let passwordsValue = password.value;
  let confirmspasswordsValue = Confirm.value;
  let maleCheck = male.checked;
  let femaleCheck = female.checked;
  let agreeCheck = agree.checked;

  if (nameValue.length < 5) {
    alert("Username must be at least 5 characters!");
  }

  else if (passwordsValue.length < 10){
    alert("Password must be at least 10 characters!");
  }

  else if(confirmspasswordsValue != passwordsValue ){
    alert("Password does'nt match ! please type again");
  }

  else if(!(maleCheck || femaleCheck)){
    alert("Please pick your gender!");
  }

  else if(!(agreeCheck)){
    alert("You haven't agree our terms and condition");
  }

  else{

    alert("Successfull!");
    regisform.submit();
  }
}
