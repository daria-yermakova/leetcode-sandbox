//9 Valid Mountain Array
function validMountainArray (arr) {
    let isValid = false;
    let max = arr[0];
    let indexMax = 0;
    let k = 1;
    if(arr.length < 3)
        return false;
    for(let i=0; i<arr.length; i++) {
        if(i !== k && k !== arr.length) {
            if(arr[i] < arr[k] && i <= indexMax) {
                max = arr[k];
                indexMax = k;
                isValid = true;
            } else if (arr[i] > arr[k] && i >= indexMax) {
                isValid = true;
            } else return false;
        }
        if(i !== arr.length-1) k++;
    }
    if(indexMax === arr.length-1 || indexMax === 0) return false;
    return isValid;
}