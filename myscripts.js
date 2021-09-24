let myFunction = function() {
  var r = prompt("Please enter hello or goodbye");
  console.log(“hello world”)
  if (r === "hello") {
    console.log(“hello”)
    for(var i = 0; i < document.getElementsByClassName("hello").length; i++){
      var matches = i.innerHTML.match(/\d+$/);
      console.log(i.innerHTML);
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
