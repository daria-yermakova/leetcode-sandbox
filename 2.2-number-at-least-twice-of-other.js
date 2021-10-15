//2 Largest Number At Least Twice of Others
function dominantIndex(nums) {
    let indexMax = 0;
    let dominantIndex = 0;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            indexMax = i;
            dominantIndex = i;
            max = nums[i];
        }
        let k = 0;
        let isBigger = false;
        while (k < nums.length) {
            if (k !== i) {
                if (nums[k] * 2 <= max) isBigger = true;
                else {
                    isBigger = false;
                    dominantIndex = -1;
                    break;
                }
            }
            k++;
        }
        if (nums[i] === max && isBigger) {
            return dominantIndex;
        }
    }
    return dominantIndex;
}
