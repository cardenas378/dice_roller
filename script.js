var button = document.getElementById("myButton");
var number = document.getElementById("number")


function generateNumber(){
  var random = Math.floor(Math.random() * 6) + 1;
  return random;
}

button.addEventListener("click", function(){
    var result = generateNumber();
    number.innerHTML = result;
})