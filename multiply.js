var param1 = process.argv [2];
var param2 = process.argv [3];

function multiply (a,b) {
	
	console.log(Number(a) * Number(b));
}

multiply([param1,param2]);

