//12 Two Sum II - Input array is sorted
function twoSum(numbers, target) {
    let isExist = false;
    let arr = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        let k = numbers.length - 1;
        while (i !== k && k !== -1 && !isExist) {
            if (numbers[i] + numbers[k] === target) {
                isExist = true;
                arr.push(i + 1);
                arr.push(k + 1);
                break;
            } else k--;
        }
    }
    return arr;
}