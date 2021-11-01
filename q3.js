// undefined
var x;
console.log(x);

if(x== undefined)
{
    console.log("x is undefined");
}

x= 1;

if(x== undefined)
{
    console.log("x is undefined");
}
else
{
    console.log("After assigning value to x, now x is defined and x is "+x);
}


var a = "calling y before defining it :-";
console.log(a);
// not defined
console.log(y);