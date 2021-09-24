let myFunction = function() {
  var r = prompt("Please enter hello or goodbye");
  if (r === "hello") {
    for(var i = 0; i < document.getElementsByClassName("hello").length; i++){
      alert("asd");
      var matches = i.innerHTML.match(/\d+$/);
      alert(i.innerHTML);
      if (matches) {
        var number = parseInt(matches[0]);
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
