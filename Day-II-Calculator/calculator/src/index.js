import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

let numBtns = document.querySelectorAll('.btn');
let zeroBtn = document.querySelector('.zero');
let numCal = document.querySelector('.to-cal');
let clearNum = document.querySelector('.clear');
let actionBtns = document.querySelectorAll('.sybls');

function removeListeners(){
	actionBtns[0].removeEventListener('click', divide);
	actionBtns[1].removeEventListener('click', times);
	actionBtns[2].removeEventListener('click', minus);
	actionBtns[3].removeEventListener('click', add);
}

function addListeners(){
	actionBtns[0].addEventListener('click', divide);
	actionBtns[1].addEventListener('click', times);
	actionBtns[2].addEventListener('click', minus);
	actionBtns[3].addEventListener('click', add);
}

function divide(){
	removeListeners();
	numCal.innerHTML += " ÷ ";
}

function times(){
	removeListeners();
	numCal.innerHTML += " X ";
}

function minus(){
	removeListeners();
	numCal.innerHTML += " – ";
}

function add(){
	removeListeners();
	numCal.innerHTML += " + ";
}

addListeners();

function equals(){
	addListeners();

	let arr1 = Array.from(numCal.innerHTML);
	console.log(arr1);


	let numarr = ['0','1','2','3','4','5','6','7','8','9'];
	let sybarr = ['÷','–', '+', 'X'];
	let num1 = "";
	let num2 = "";
	let index = 0;
	let symb;
	let count = 0;

	//gets symb
	for (let i = 0; i <arr1.length; i++){
	  if (sybarr.indexOf(arr1[i]) !== -1){
	    symb = arr1[i];
	  }
	}

	//gets first number
	for(let i = 0; i < arr1.length; i++){
	  if(numarr.indexOf(arr1[i]) !== -1){
	    num1 += arr1[i];
	  }
	  if(arr1[i] === " "){
	    break;
	  }
	}

	//gets the needed index to get the second number
	for (let i = 0; i < arr1.length; i++){
	  index++;
	  if (arr1[i] === " "){
	    count++
	  }
	  if (count === 2){
	    break;
	  }
	}

	//gets the second number
	for (let i = index; i < arr1.length; i++){
	  num2 += arr1[i];
	}

	switch (symb){
	  case "÷":
	    numCal.innerHTML = (num1 / num2);
	  break;
	  case "–":
	    numCal.innerHTML = (num1 - num2);
	  break;
	  case "+":
	    numCal.innerHTML = (parseInt(num1) + parseInt(num2));
	  break;
	  case "X":
	    numCal.innerHTML = (num1 * num2);
	  break;
	}


}

actionBtns[4].addEventListener('click', equals);

clearNum.addEventListener('click', function(){
	numCal.innerHTML = "0";
});

zeroBtn.addEventListener('click', function(){

	if (numCal.innerHTML === "0") {
		numCal.innerHTML = "0";
	} else {
		numCal.innerHTML += zeroBtn.innerHTML;
	}

});



numBtns.forEach(function(item){
	item.addEventListener('click', function(){

		if (numCal.innerHTML === "0") {
			numCal.innerHTML = "";
		}

		console.log(numCal.innerHTML.length);

		if (numCal.innerHTML.length === 9){
			return
		}

		numCal.innerHTML += item.innerHTML;
	});
});

