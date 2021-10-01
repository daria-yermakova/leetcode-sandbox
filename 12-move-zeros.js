//12 Move Zeroes
function moveZeroes (nums) {
    let k = 0;
    for(let i=0; i<nums.length; ++i) {
        if(nums[i] !== 0) {
            nums[k] = nums[i];
            k++;
        }
    }
    for(let i=0; i<nums.length-k; ++i) {
        nums[nums.length-1-i] = 0;
    }
    return nums;
}

