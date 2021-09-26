//13 Sort Array By Parity
function sortArrayByParity (nums) {
    const odd = [];
    for(let i=0; i<nums.length; ++i) {
        if(nums[i] % 2 !== 0) {
            odd.push(nums[i]);
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.concat(odd);
}
