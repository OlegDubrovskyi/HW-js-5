var arr = [];
var count = +prompt("Введите число");
var evenNumbers = "";
var unevenNumbers = "";
for(var i=count; i<=count+100; i++){
	arr.push(i);
	}
for(var i=0; i<arr.length; i++){
	if(arr[i]%2===0){
		evenNumbers += String(arr[i]) + " ";
		
	} else {
		unevenNumbers += String(arr[i]) + " ";
	}
}
console.log(evenNumbers);
console.log(unevenNumbers);
