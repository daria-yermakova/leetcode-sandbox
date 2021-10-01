//10 Replace Elements with Greatest Element on Right Side
function replaceElements(arr) {
    for(let i=0; i<arr.length-1; ++i) {
        let k = arr.length-1;
        let max = arr[i+1];
        while(k > i) {
            if(arr[k] > max) max = arr[k];
            k--;
        }
        arr[i] = max;
    }
    arr[arr.length-1] = -1;
    return arr;
}
