//1 Find Pivot Index
function pivotIndex(nums) {
    let pivotIndex = -1;
    for (let i = nums.length - 1; i >= 0; i--) {
        let leftSum = 0;
        let rightSum = 0;
        let leftIndex = 0;
        let rightIndex = nums.length - 1;
        while (leftIndex < i || rightIndex > i) {
            if (i !== leftIndex) leftSum += nums[leftIndex];
            if (i !== rightIndex) rightSum += nums[rightIndex];
            if (leftIndex < i) leftIndex++;
            if (rightIndex > i) rightIndex--;
        }
        pivotIndex = leftSum === rightSum ? i : pivotIndex;
    }
    return pivotIndex;
}