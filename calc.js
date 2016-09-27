
function add(a,b) {
	
	var result = a + b;
	return result;

}

function substract(a, b){
	return a - b;
}

function multiply(a, b){
	return a * b;
}

function divide(a, b){
	return a/b;
}

function calc(){
	//console.log(process.argv);//
	var operation = process.argv[2];
	console.log(process.argv[2]);


	var x = process.argv[3];
	var y = process.argv[4];

	var a = parseInt(x, 10);
	var b = parseInt(y, 10);

	if(operation === 'add'){
		
		console.log(add(a,b));
	}
	else if(operation === 'substract') {
		console.log(substract(a, b));

	}
	else if(operation === 'divide'){
		console.log(divide(a, b));
	}

	else {console.log(multiply(a, b));

	}

	/*var result = add(a, b);
	console.log(result);*/

}

calc();
