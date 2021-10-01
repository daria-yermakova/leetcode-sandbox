//4 Duplicate Zeros
function duplicateZeros (arr) {
    for (let i=0; i<arr.length; ++i){
        let k = arr.length - 1;
        if(arr[i] === 0) {
            while(k !== i) {
                if(k === i+1) {
                    arr[k] = 0;
                } else {
                    arr[k] = arr[k-1];
                }
                k--;
            }
            i++;
        }
    }
}