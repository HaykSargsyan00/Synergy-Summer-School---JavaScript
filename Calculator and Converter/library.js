/*--------------Stack----------------*/
class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
    // Functions to be implemented 
    push(element) 
	{ 
	    // push element into the items 
	    this.items.push(element); 
	} 
  	pop() 
	{ 
	    // return top most element in the stack 
	    // and removes it from the stack 
	    // Underflow if stack is empty 
	    if (this.items.length == 0) 
	        return "Underflow"; 
	    return this.items.pop(); 
	} 
    peek() 
	{ 
	    // return the top most element from the stack 
	    // but does'nt delete it. 
	    return this.items[this.items.length - 1]; 
	} 
    isEmpty() 
	{ 
	    // return true if stack is empty 
	    return this.items.length == 0; 
	} 
    // printStack() 
} 

class Converter{
	units = new Map([
		['rates' , new Map([['amd',1],['usd',2]])],
		['weight', new Map([['g',1000],['kg',1]])],
		['length', new Map([['mm',1000],['sm',100],['dm',10],['m',1]])]
	]);

	
	add(property,unit,value){
		if(this.units.has(property)){
			this.units.get(property).set(unit,value);
		}
		else{
			this.units.set(property,new Map([]));
			this.units.get(property).set(unit,value);
		}
	}

	convert(val,from,to){
		let property = undefined;
		this.units.forEach(function(elem){
			if(elem.has(from)){
				if(elem.has(to)){
					property = elem;
				}
			}
		})
		if(property)
		{
			let result = (val/property.get(from))*property.get(to);
			console.log(result);
			return result;
		}
		console.log('Erorr');
		return false;
	}
}




function isNumber(x){
	if(x>=0 && x<=9){
		return true;
	}
	return false;
}

function div(a,b){
	if(isNumber(a) && isNumber(b)){
		if(b == 0)
		{
			return "bajanarar@ 0";
		}
		return a/b;
	}
	return NaN;
}

function mult(a,b){
	if(isNumber(a) && isNumber(b)){
		return parseInt(a)*parseInt(b);
	}
	return NaN;
}

function sub(a,b){
	if(isNumber(a) && isNumber(b)){
		return parseInt(a)-parseInt(b);
	}
	return NaN;
}

function add(a,b){
	if(isNumber(a) && isNumber(b)){
		return parseInt(a)+parseInt(b);
	}
	return NaN;
}


function calculator(expression){
	let i = 0;
	let calcStack = new Stack;
	let result;
	let subExp;
	expression = expression.replace(/\s/g, '');
	
	if(!isTheExpressionTrue()){
		return ("please write correct expression ");
	}
	
	while(expression.length > i){
		if(expression[i] == ')' || i == (expression.length - 1)){
			if(i == expression.length - 1 && expression[i] != ')'){
				calcStack.push(expression[i]);
			}
			subExp = '';
			result = 0;
			while( (!calcStack.isEmpty()) && (calcStack.peek() != '(')){
				subExp = calcStack.pop() + subExp;
			}

			result = calc(subExp);
			calcStack.pop();
			console.log(result);
			calcStack.push(result);
		}
		else{
			calcStack.push(expression[i]);
		}
		i++;
	}
	subExp = '';
	while( (!calcStack.isEmpty()) ){
		subExp = calcStack.pop() + subExp;
	}
	if(!isNaN(parseInt(result))){
		result = calc(subExp);	
	}
	return result;


	function isTheExpressionTrue(){
		for(let i = 0; i < expression.length ; i++)
		{
			if(expression[i].match(/[^0-9,+,\-,/,*,(,)]/g) != null){
				return false;
			}

		}
		return true;
	}
	/*--------------------------------------------Harc ka--------------------------------------------*/
	function calc(expression){


	/*----------------------------------------------------Harc----------------------------------------------------*/
	function nextNum(i) {
		while(i+1 < expression.length && isNumber( expression[i+1] ) ){
				i++;
				nextNum += expression[i];//
		}
	}
	/*-------------------------------------------------------------------------------------------------------------*/

	function addOrDiv(operation){
			let i = expression.indexOf(operation);
			let j = i;
			let firstNum = '';
			let secondNum = '';
			while(i+1 < expression.length && isNumber( expression[i+1] ) )
			{
					i++;
					secondNum += expression[i];
			}

			while(j-1 >= 0 && isNumber( expression[j-1] ) )
			{
					j--;
					firstNum = expression[j] + firstNum;
			}

			switch(operation){
				case ('/'):
					firstNum /= secondNum;
					break;
				case ('*'):
					firstNum *= secondNum;
					break;
			}
			expression = (expression.substring(0,j) + firstNum + expression.substring(i+1,expression.length));
		}

		let res = 0;
		while(expression.indexOf('/') >= 0 )
		{	
			addOrDiv('/');
		}
		while(expression.indexOf('*') >= 0 )
		{	
			addOrDiv('*');
		}
		if (expression.indexOf('+') >= 0 || expression.indexOf('-') >= 0){
			let nextNum;
			res = '';
			let i = 0;
			while(i < expression.length && isNumber( expression[i] ) ){
				res += expression[i];
				i++;
			}
			for (i ++; i < expression.length; i+=2) {
				let nextNum;
				let operation;
				operation = expression[i-1];
				nextNum = expression[i];
				while(i+1 < expression.length && isNumber( expression[i+1] ) )
				{
					i++;
					nextNum += expression[i];
				}
				if(operation == '+')
					res = parseInt(res) + parseInt(nextNum);
				else
					res = parseInt(res) - parseInt(nextNum);
			}
		}else{
			res = expression;
		}
		return res;
	}
}
