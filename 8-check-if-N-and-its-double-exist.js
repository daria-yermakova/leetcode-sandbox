//8 Check If N and Its Double Exist
function checkIfExist (arr) {
    let isExist = false;
    for(let i=0; i<arr.length-1; i++) {
        for(let j=0; j<arr.length; j++) {
            if(i!==j) {
                if(arr[i] === arr[j]*2) isExist = true;
            }
        }
    }
    return isExist;
}