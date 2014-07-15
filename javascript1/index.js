var a = 3;
var b = 5;

var flag = false;
//1 
var c = (flag*a + (1-flag)*b);
//2
var c = (flag && a || b);

//3
function getValueFromException (){

	function throwIfFalse()
	{
		throw 'false';
	}
	try{
		var temp = !flag && throwIfFalse();
		
			return a;
	}
	catch(e){
		
			return b;
	}
}

//4

function getValueFromArray(){
	var list = [a,b];
	var temp = Number(flag);
	return list[temp];
}

//5
var c = eval(a*flag || b*(!flag));


