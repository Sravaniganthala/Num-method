var name="sravs";
var id=3;
var address="hyd";
var job="developer";
var sal=4.5;
var details=["dad","mom","me","sis"];
console.log(details.length);//4
console.log(details);//'dad','mom','me',sis'
details[5]="friend";//adding
console.log(details);
details[2]="sravs";//modifing
console.log(details);
//to string
var a=10;
var a1=a.toString();
console.log(typeof a1,a1)//String 10
//parseInt()
var a=987.1234;
console.log(parseInt(a));
//parseFloat
var a=1234.567;
console.log(parseFloat(a));
//isFinite
var a=100;
var b="sravs";
console.log(isFinite(a));
console.log(typeof isFinite(a));
console.log(typeof isFinite(b));
//undefined
var a=[1,2];
console.log(isFinite(a));
var b={}
console.log(typeof(b));
var c={name:"sravs"};
console.log(typeof(a));
//NULL
var a=null;
console.log(typeof a);
//toFixed
var a=1023.789;
console.log(a.toFixed(8));
//toprecision
var a1=7896.123;
conslole.log(toprecision(a1));

