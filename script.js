/*  open index.html in your web browser
    refresh your browser when you make 
    an edit to this file...*/

(function(){
  /*  this function gets called on page load
      for example, uncomment the following line:/
  
  alert('hello'); 
  
  /*call custom functions here...*/
  
}());

/*create new functions below this line...*/

function checkMaxValue() {
    var el1 = document.getElementById("value-one");
    var el2 = document.getElementById("value-two");
    var val1 = parseFloat(document.getElementById("value-one").value);
    var val2 = parseFloat(document.getElementById("value-two").value);
    var resultMessage = document.getElementById("result-message");

    if (el1.value == "" && el2.value == "") {
        resultMessage.innerText = "Values are empty.";
    } else if (el1.value == "") {
        resultMessage.innerText = "Value one is missing.";
    } else if (el2.value == "") {
        resultMessage.innerText = "Value two is missing.";
    } else if (val1 > val2) {
        resultMessage.innerText = "Value one is greater.";
        el1.className = "correct-answer";
        el2.className = "wrong-answer";
    } else if (val1 < val2) {
        resultMessage.innerText = "Value two is greater.";
        el2.className = "correct-answer";
        el1.className = "wrong-answer";
    } else if (val1 == val2) {
        resultMessage.innerText = "Values are equal.";
        el1.className = "correct-answer";
        el2.className = "correct-answer";
    } else {
        resultMessage.innerText = "Error: 9001";
    }

}