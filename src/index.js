import React from 'react';
import ReactDOM from 'react-dom';

/*normal function*/

var drink=function(){
  var drink1= "tea";
  var drink2="coffee";
  var comb= "i prefer "+drink2 +" over "+ drink1;
  document.getElementById("root").innerHTML=comb;
}

drink();



/*arrow function*/

var high=()=>{
  var  a=29;
  var b=11;
  var c= a+b;
  document.getElementById("root").innerHTML=c;
}

high();

