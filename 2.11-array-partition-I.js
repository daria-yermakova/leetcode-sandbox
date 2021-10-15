//11 Array Partition I
function arrayPairSum(nums) {
    let sumMax = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        let min = nums[i] < nums[i + 1] ? nums[i] : nums[i + 1]
        sumMax += min;
    }
    return sumMax;
}