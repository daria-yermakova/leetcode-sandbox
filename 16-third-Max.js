//16  Third Maximum Number
function thirdMax (nums) {
    const arr = [];
    let counter = 0;
    for(let i=0; i<nums.length; ++i) {
        arr.push(nums[i]);
        for (let j = 0; j < arr.length-1; j++) {
            if(arr[i]<arr[j]) {
                arr[i] = arr.splice(j, 1, arr[i])[0];
            }
        }
    }
    let filteredArray = arr.filter((item, index) => arr.indexOf(item) === index);
    if(filteredArray.length >= 3) return filteredArray[filteredArray.length-3];
    else return arr[arr.length-1];
}