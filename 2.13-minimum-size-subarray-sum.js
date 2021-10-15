//13 Minimum Size Subarray Sum
function minSubArrayLen(target, nums) {
    let arr = [];
    let minLength = nums.length;
    let isExist = false;
    for (let i = 0; i < nums.length; i++) {
        let k = i + 1;
        let sum = nums[i];
        arr = [nums[i]];
        if (sum >= target) return arr.length;
        else {
            while (k < nums.length) {
                sum += nums[k];
                arr.push(nums[k]);
                if (sum >= target) {
                    minLength = arr.length < minLength ? arr.length : minLength;
                    isExist = true;
                    break;
                } else k++;
            }
        }
    }
    return isExist ? minLength : 0;
}