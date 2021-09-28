//2 Find Numbers with Even Number of Digits
function findNumbers (nums) {
    let counter = 0;
    for(let i=0; i<nums.length; ++i){
        if(Math.ceil(Math.log10(nums[i])) % 2 === 0)
            counter++;
    }
    return counter;
}