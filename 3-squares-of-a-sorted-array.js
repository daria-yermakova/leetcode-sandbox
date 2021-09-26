//3 Squares of a Sorted Array
function sortedSquares (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++)
    {
        let squareI = nums[i]*nums[i];
        arr.push(squareI);
        for (let j = 0; j < arr.length-1; j++) {
            if(arr[i]<arr[j]) {
                arr[i] = arr.splice(j, 1, arr[i])[0];
            }
        }
    }
    return arr;
}