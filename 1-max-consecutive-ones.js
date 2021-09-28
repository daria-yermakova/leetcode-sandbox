//1 Max Consecutive Ones
function findMaxConsecutiveOnes (nums) {
    let counter = 0;
    let maximum = 0;
    for(let i=0; i < nums.length; ++i){
        nums[i] === 1 ? counter++ : counter=0;
        counter > maximum ? maximum = counter : maximum;
    }
    return maximum;
}
