//6 Pascal's Triangle
function generate(numRows) {
    let arr = [];
    for (let i = 0; i < numRows; i++) {
        let curRow = [];
        for (let j = 0; j <= i; j++) {
            if (i <= 1) {
                curRow.push(1);
            } else {
                if (j === 0 || j === i) {
                    curRow.push(1);
                } else {
                    let curNum = arr[i - 1][j - 1] + arr[i - 1][j];
                    curRow.push(curNum);
                }
            }
        }
        arr.push(curRow);
    }
    return arr;
}
