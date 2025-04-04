const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result=[];
	let currA=[];
	let currSum=0;

	for(let num of arr){
		if(currSum+num<n){
			currA.push(num);
			currSum+=num;
		}else{
			if(currA.length>0){
				result.push(currA);
			}else{
				currA=[num];
				currSum=num;
			}
		}
	}
	if(currA.length>0) result.push(currA);
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
