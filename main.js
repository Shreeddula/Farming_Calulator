/*Convert the below variable number_1 into a number using the predefined function Number().*/
var number_1 = document.getElementById("firstno").value;


function calculate() {
number_1 = Number(document.getElementById("firstno").value);

var area = number_1 * number_1;
var perimeter  = 4 * number_1;

document.getElementById("lblArea").innerHTML = area;

 /*Display the variable perimeter on the division with ID lblPerimeter.*/
document.getElementById("lblPerimeter").innerHTML = perimeter;
  
}


