//9 Valid Mountain Array
function validMountainArray (arr) {
    let max = Math.max.apply(null, arr);
    let indexMax = arr.indexOf(max);
    let counterIncreasing = 0;
    let counterDecreasing = 0;
    let isValid = false;
    if(arr.length < 3)
        return false;
    for(let i=0; i<arr.length; i++) {
        if(i < indexMax) {
            if(arr[i] < arr[i+1]) counterIncreasing++;
        }
        else if(i >= indexMax) {
            if(arr[i] > arr[i+1]) counterDecreasing++;
        }
    }
    isValid = (counterDecreasing !== 0) && (counterIncreasing !==0) &&
        (((counterDecreasing+counterIncreasing)-(arr.length-1)) === 0);
    return isValid;
}