var a = -13;
var b = 0;

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

//6
function getValueFromRegexp(){
	var str = flag.toString();
	var res = (str.match(/true/) || a) && (str.match(/false/) || b);
	return res;
}

//7

var c = (flag || a) ^ (flag || b);

//8

function getValueFromArrayTwo(){
	var tempList = [0,1];
	var tempNumper = Number(flag) + 1;
	var c =  (((tempNumper) in tempList || a ) ^ ((tempNumper) in tempList || b));
	return c;
}

