//1 Max Consecutive Ones
function findMaxConsecutiveOnes (nums) {
    let counter = 0;
    let maximum = 0;
    for(let i=0; i < nums.length; ++i){
        if(nums[i] === 1)
            counter++;
        else
            counter = 0;
        if (counter > maximum)
            maximum = counter;
    }
    return maximum;
}
