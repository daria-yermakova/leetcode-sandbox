//17  Find All Numbers Disappeared in an Array
function findDisappearedNumbers (nums) {
    let arr = [...Array(nums.length).keys()].map(i => i + 1);
    for(let i=0; i<nums.length; ++i) {
        if(arr.includes(nums[i])) arr.splice(arr.indexOf(nums[i]), 1);
    }
    return arr;
}