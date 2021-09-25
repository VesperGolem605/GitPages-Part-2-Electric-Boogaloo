let myFunction = function() {
  var r = prompt("Please enter hello or goodbye3");
  if (r === "hello") {
    for(var i = 0; i < document.getElementsByClassName("hello").length; i++){
      document.getElementsByClassName("hello")[i].className += ' highlight';
    }
    for(var i = 0; i < document.getElementsByClassName("goodbye").length; i++){
      document.getElementsByClassName("goodbye")[i].classList.remove("highlight");
    }
  } else if(r === "goodbye") {
    for(var i = 0; i < document.getElementsByClassName("goodbye").length; i++){
      document.getElementsByClassName("goodbye")[i].className += ' highlight';
    }
    for(var i = 0; i < document.getElementsByClassName("hello").length; i++){
      document.getElementsByClassName("hello")[i].classList.remove("highlight");
    }
  } else {
    alert("Incorrect, please enter hellow or goodbye");
  }
}

document.getElementById("thebutton").addEventListener("click", myFunction);

