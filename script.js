let myFunction = function() {
  var r = prompt("Please enter hello or goodbye");
  if (r === "hello") {
    for(var i = 0; i < document.getElementsByClassName("hello").length; i++){
      var matches = i.innerHTML.match(/\d+$/);
      if (r) {
        var number = parseInt(r[0]);
        number *= 2;
        i.innerHTML = "Hello Number " + number;
      }
    }
  } else if(r === "goodbye") {
    
  } else {
    alert("Incorrect, please enter hellow or goodbye");
  }
}

document.getElementById("thebutton").addEventListener("click", myFunction);
