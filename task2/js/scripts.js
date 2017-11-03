var arr = {
  Minsk: "Belarus",
  Kiev: "Ukraine",
  London: "United Kingdom",
  Pyongyang: "North Korea",
  Brasilia: "Brazil"
}
for(var value in arr){
	console.log(value + " is the capital of "+ arr[value]);
}
console.log(arr.Minsk);
