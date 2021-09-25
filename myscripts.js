let myFunction = function() {
  var r = prompt("Please enter hello or goodbye3");
  if (r === "hello") {
    document.getElementsByClassName("hello").style = highlight;
  } else if(r === "goodbye") {
    
  } else {
    alert("Incorrect, please enter hellow or goodbye");
  }
}

document.getElementById("thebutton").addEventListener("click", myFunction);

