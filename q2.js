 var a = "Scope of variable";
 console.log(a);
 var msg = "this is in global";
 console.log("global message : " + msg);


 var x = function ()
 {
     var msg = "this is in local ";
     console.log("x : message = "+msg);
     y();
 }
 function y ()
 {
    console.log("y : message = "+msg);
 }
 x();