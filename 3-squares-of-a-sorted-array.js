//3 Squares of a Sorted Array
function sortedSquares (nums) {
    let start = 0;
    let end = nums.length-1;
    let arr = [];
    for(let index=nums.length-1; index>=0; --index) {
        let squareEnd = nums[end]*nums[end];
        let squareStart = nums[start]*nums[start];
        if(start!==end) {
            if(squareStart >= squareEnd) {
                arr[index] = squareStart;
                start++;
            }
            else {
                arr[index] = squareEnd;
                end--;
            }
        } else {
            arr[index] = squareEnd;
        }
    }
    return arr;
}