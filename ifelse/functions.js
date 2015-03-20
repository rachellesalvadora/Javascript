var coolNumber = 1;

function changeTheText(){
//Chane the paragraph text
  
  if(coolNumber == 1) {
    var changeTextVariable = document.getElementById("changeUserText").value;

    document.getElementById("paragraphText").innerHTML = changeTextVariable;
    
  }
  
  else {
    var changeTextVariable = "Else statement fired";
    
    document.getElementById("paragraphText").innerHTML = changeTextVariable;
  }
  
}

function work() {
  
}