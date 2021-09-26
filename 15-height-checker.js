//15 Height Checker
function heightChecker (heights) {
    const arr = [];
    let counter = 0;
    for(let i=0; i<heights.length; ++i) {
        arr.push(heights[i]);
        for (let j = 0; j < arr.length-1; j++) {
            if(arr[i]<arr[j]) {
                arr[i] = arr.splice(j, 1, arr[i])[0];
            }
        }
    }
    for(let i=0; i<heights.length; ++i) {
        if(heights[i] !== arr[i]) {
            counter++;
        }
    }
    return counter;
}