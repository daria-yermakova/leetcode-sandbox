//10 Replace Elements with Greatest Element on Right Side
function replaceElements(arr) {
    for(let i=0; i<arr.length-1; ++i) {
        arr[i] = Math.max.apply(null, arr.slice(i + 1, arr.length));
    }
    arr[arr.length-1] = -1;
    return arr;
}
