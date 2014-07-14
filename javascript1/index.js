var a = 3;
var b = 5;

var flag = false;

var c = (flag*a + (1-flag)*b); //3
flag = true; 
var c = (flag*a + (1-flag)*b); //5

var c = (flag && a || b);
