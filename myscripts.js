let myFunction = function() {
  var r = prompt("Please enter hello or goodbye3");
  if (r === "hello") {
    for(var i = 0; i < document.getElementsByClassName("hello").length; i++){
      var q = prompt("Plasdgoodbye3")
      var matches = i.innerHTML.match(/\d+$/);
      alert(i.innerHTML);
      if (matches) {
        var number = parseInt(matches[0]);
        number *= 2;
        i.innerHTML = "Hello Number " + number;
      }
    }
    var x = prompt("Plasdgoodbye3");
  } else if(r === "goodbye") {
    
  } else {
    alert("Incorrect, please enter hellow or goodbye");
  }
}

document.getElementById("thebutton").addEventListener("click", myFunction);
