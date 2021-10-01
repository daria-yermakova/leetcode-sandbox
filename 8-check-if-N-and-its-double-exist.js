//8 Check If N and Its Double Exist
function checkIfExist (arr) {
    let isExist = false;
    for(let i=0; i<arr.length-1; i++) {
        let k = arr.length-1;
        while(i !== k && k!==-1) {
            if(arr[i] === arr[k]*2 || arr[i]*2 === arr[k]) {
                isExist = true;
                break;
            } else k--;
        }
    }
    return isExist;
}