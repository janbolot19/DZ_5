

function reverseStr(str){ 
    var a = ""; 
    for (i = 0; i < str.length; i++){ 
        a += str[(str.length - 1) - i]; 
    } 
    console.log(a); 
} 
reverseStr("hello") 


function  average(arr)
{
    if(arr.length === 0)
        return 0;
 
    var sum = 0;
 
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return sum / arr.length;
}
 
var k = [1, 2, 3, 4, 5, 6, 7];
console.log(average(k));


