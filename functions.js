var variableNumber = 2;
var secondNumber = 2;
var VariableName = 'John';
var secondString = 'Awesome';

function changeTheText(){
//Chane the paragraph text
  var changeTextVariable = document.getElementById("changeUserText").value;

  document.getElementById("paragraphText").innerHTML = changeTextVariable;
}