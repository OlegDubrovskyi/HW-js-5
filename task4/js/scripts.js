var arr = [1, 4, 9];

function map (arr, action){
	let newArr = [];
	for(var i = 0; i<arr.length; i++){
		newArr.push(action(arr[i]));
	}
	return newArr;
}

var newArr = map(arr, Math.sqrt);
console.log(newArr);

	
	
		
   

	