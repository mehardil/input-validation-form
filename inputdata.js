
var element = document.getElementById("submitted");
element.addEventListener("click", myFunction);

function myFunction() {
    var usernames = document.getElementById("username").value
    console.log("user",usernames)
    var mails= document.getElementById("mail").value
    console.log(mails)
    var passwords = document.getElementById("password").value
    console.log(passwords)
    var phonenos = document.getElementById("phoneno").value
   console.log(phonenos)

   var error = [];

   if (usernames == "") {
    error.push("you cannot enter any username");
   
   } 
   var mailformat = mails.includes("@")   // ERROR 1 MAIL
    if(mailformat == false){
    error.push("your mail format is invalid");
    document.getElementById("username").value = ""
}
    if(passwords.length < 8){                // ERROR 2--- LENGTH PASSWORD
        console.log('passwords.length',passwords.length);
    error.push("Please enter atleast 8 character password");
}

    if (passwords.search(/[a-z]/) < 0) {   // ERROR 3 LOWER CASE PASSWORD
        console.log('passwords.search(/[a-z]/)',passwords.search(/[a-z]/));
        error.push("Your password needs an lower case letter");
      }

  if(passwords.search(/[A-Z]/) < 0) {   // ERROR 4  UPPER CASE PASSWORD
        console.log('passwords.search(/[A-Z]/)',passwords.search(/[A-Z]/));
         error.push("Your password needs an upper case letter");
      } 

  if (passwords.search(/[0-9]/) < 0) {   // ERROR 5  NO NUMBER PASSWORD
        console.log('passwords.search(/[0-9]/)',passwords.search(/[0-9]/));
       error.push("Your password needs a number");
      } 


  if (phonenos.search(/[a-z][A-Z]/) > 0) {   // phone number 
        console.log('passwords.search(/[a-z]/)',passwords.search(/[a-z]/));
        error.push("phone number have no letter");
      } 
    if(error.length>0){
        // error.map(err => (alert(err)))
        var errr = error.map((err) => `${err}\n `);
         alert(errr)
        // alert(error.map(err => (`${err} " "`)))
    }
   else{
    alert("ok")
    location.href="./cssbootscrap/boots.html";
   }
        
    }


 


