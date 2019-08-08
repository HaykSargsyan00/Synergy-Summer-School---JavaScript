function solveExpression(){
	let expression = document.getElementById('expressionInput').value;
	let answer = calculator(expression);
	document.getElementById('answerField').innerHTML = answer;
}