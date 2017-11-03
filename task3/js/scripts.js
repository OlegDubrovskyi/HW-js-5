var arr = [1, 2, 3, 4 ,5 , 6, 7];
function forEach(arr, element){
	var i = 0;
	var value;
	while(i < arr.length){
		if(arr[i] === element) { 
			value = element;
			break;
		}
		i++;
	}
	console.log(value);
	return value;
}

forEach(arr, 2)
	
		
   

	