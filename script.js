var btn = document.getElementById("generate");
var modal = document.getElementById("myModal");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var last = document.getElementById("last");

var nxt = document.getElementById("next");
var nxt2 = document.getElementById("next2");
var nxt3 = document.getElementById("next3");
var nxt4 = document.getElementById("next4");
var nxt5 = document.getElementById("next5");
var lastbtn = document.getElementById("lastbtn");

var passLength = document.getElementById("passLength");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  first.style.display = "block";
  second.style.display = "none";
  third.style.display = "none";
  fourth.style.display = "none";
  fifth.style.display = "none";
  last.style.display = "none";
}

nxt.onclick = function() {
  //console.log('Password Length'+passLength.value);
  var passwordlength = passLength.value;
  //alert (passwordlength);
  if((passwordlength<8) || (passwordlength >129)) {
    alert('Password Length should be greater than 7 and less than equal to 128');
    passLength.focus();
    //return false;
  } else {

     first.style.display = "none";
  second.style.display = "block";
  third.style.display = "none";
  fourth.style.display = "none";
  fifth.style.display = "none";
  last.style.display = "none";
  }

}

nxt2.onclick = function() {

  //var x = document.getElementById("upperCase").required;
  const rbs = document.querySelectorAll('input[name="upperCase"]');

  let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            //alert(selectedValue);

            if (typeof selectedValue === "undefined") {
              alert(' Please select Yes or No');
            } else {

               first.style.display = "none";
 second.style.display = "none";
 third.style.display = "block";
 fourth.style.display = "none";
 fifth.style.display = "none";
 last.style.display = "none";
            }

}

nxt3.onclick = function() {
 
    

      const rbs = document.querySelectorAll('input[name="lowerCase"]');

  let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            //alert(selectedValue);

            if (typeof selectedValue === "undefined") {
              alert(' Please select Yes or No');
            } else {

  first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "block";
    fifth.style.display = "none";
    last.style.display = "none";
            }
  
}

nxt4.onclick = function() {


const rbs = document.querySelectorAll('input[name="Numbers"]');

  let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            //alert(selectedValue);

            if (typeof selectedValue === "undefined") {
              alert(' Please select Yes or No');
            } else {

  first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "block";
    last.style.display = "none";
            }

}

nxt5.onclick = function() {


  const rbs = document.querySelectorAll('input[name="specialCharacters"]');

  let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            //alert(selectedValue);

            if (typeof selectedValue === "undefined") {
              alert(' Please select Yes or No');
            } else {

  first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
    last.style.display = "block";


    var length =passLength.value;

  var upperSelected = document.querySelector('input[name="upperCase"]:checked').value;
  var lowerSelected = document.querySelector('input[name="lowerCase"]:checked').value;
  var numberSelected = document.querySelector('input[name="Numbers"]:checked').value;
  var specialSelected = document.querySelector('input[name="specialCharacters"]:checked').value;
  var Txt = "";
  if((upperSelected == 0) && (lowerSelected == 0) &&  (numberSelected  == 0) &&  (specialSelected == 0)){

     Txt = " You have not selected any option as yes your password cann\'t be generated ";
  }
  else {
    Txt = " Your password will be "+ length +" character long  with all the options selected as yes";
  }
    document.getElementById('psdmsg').innerHTML =Txt;
            }

}


last.onclick = function () {

  var length =passLength.value;

  var upperSelected = document.querySelector('input[name="upperCase"]:checked').value;
  var lowerSelected = document.querySelector('input[name="lowerCase"]:checked').value;
  var numberSelected = document.querySelector('input[name="Numbers"]:checked').value;
  var specialSelected = document.querySelector('input[name="specialCharacters"]:checked').value;
	

    var uppercase = (upperSelected == 1) ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' :'';
    var lowercase = (lowerSelected == 1) ? 'abcdefghijklmnopqrstuvwxyz' :'';
    var numbers = (numberSelected  == 1) ? '0123456789' :'';
    var symbols = (specialSelected == 1) ? '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~' :'';

    /*var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';*/
    var all = uppercase + lowercase + numbers + symbols;
    var password = '';
    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    //return password;
    //console.log(password);
    document.getElementById("password").value=password;
    modal.style.display = "none";

}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/