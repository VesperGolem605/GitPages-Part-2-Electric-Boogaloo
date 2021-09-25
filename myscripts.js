let myFunction = function() {
  var r = prompt("Please enter hello or goodbye3");
  if (r === "hello") {
    for(var i = 0; i < document.getElementsByClassName("hello").length; i++){
      var matches =  document.getElementsByClassName("hello")[i].innerHTML.match(/\d+$/);
      document.getElementsByClassName("hello")[i].innerHTML = ("Hello Number " + matches[0]*2);
    }
  } else if(r === "goodbye") {
    for(var i = 0; i < document.getElementsByClassName("goodbye").length; i++){
      var matches =  document.getElementsByClassName("goodbye")[i].innerHTML.match(/\d+$/);
      document.getElementsByClassName("goodbye")[i].innerHTML = ("Goodbye Number " + matches[0]*2);
    }
  } else {
    alert("Incorrect, please enter hellow or goodbye");
  }
}

document.getElementById("thebutton").addEventListener("click", myFunction);

