let myFunction = function() {
  var r = prompt("Please enter hello or goodbye3");
  if (r === "hello") {
      var r = prompt(" hello or goodbye3");
    document.getElementsByClassName("hello").innerHTML = "asd";
  } else if(r === "goodbye") {
    
  } else {
    alert("Incorrect, please enter hellow or goodbye");
  }
}

document.getElementById("thebutton").addEventListener("click", myFunction);

