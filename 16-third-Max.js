//16  Third Maximum Number
function thirdMax (nums) {
    let max = 0;
    let secondMax = 0;
    let thirdMax = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] > max) {
            thirdMax = secondMax;
            secondMax = max;
            max = nums[i];
        } else if(nums[i] > secondMax) {
            thirdMax = secondMax;
            secondMax = nums[i];
        } else if(nums[i] > thirdMax) {
            thirdMax = nums[i];
        }
    }
    return thirdMax ? thirdMax : max;
}