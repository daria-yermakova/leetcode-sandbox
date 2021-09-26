//12 Move Zeroes
function moveZeroes (nums) {
    let counter = 0;
    for(let i=0; i<nums.length; ++i) {
        if(nums[i] === 0) {
            nums.splice(i,1);
            i--;
            counter++;
        }
    }
    for(let i=counter; i>0; i--) {
        nums.push(0);
    }
    return nums;
}

