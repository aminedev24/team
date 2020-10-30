
var button = document.getElementById('button');

var center = document.getElementById('center');

var container = document.getElementById('container');



var colorChange = document.getElementById('buttonc');


var counter = 1;

colorChange.onclick = function () {
  //'use strict';
  //counter ++;
  switch (counter){
    case 1:
      container.style.backgroundColor = 'green';
    break;
    case 2:
     container.style.backgroundColor = 'grey';
    break;
    case 3:
      container.style.backgroundColor = 'steelblue';
      
    break;
    default:
      counter = 0;
      //Block of code 
      container.style.backgroundColor = 'cadetblue'; 
  }
  counter++;
}

