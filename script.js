var button = document.getElementById("myButton");
var number = document.getElementById("number")


function generateNumber(){
  var random = Math.floor(Math.random() * 6) + 1;
  var diceImg = "img/dice"+ random + ".png"
  document.querySelector('.img1').setAttribute('src', diceImg);

  return random;
}

button.addEventListener("click", function(){
    var result = generateNumber();
    document.getElementById('result').innerHTML = '<img src="dice' + RandomNumber1 + '.png">';
    number.innerHTML = result;
})