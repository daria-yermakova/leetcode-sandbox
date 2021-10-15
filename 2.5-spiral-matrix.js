//5 Spiral Matrix
function spiralOrder(matrix) {
    let arr = [];
    let i = 0;
    let j = 0;
    let counter = matrix.length * matrix[0].length;
    let isRight = true;
    let isDown = false;
    let isLeft = false;
    let isUp = false;
    let counterEdge = 0;
    while (counter > 0) {
        if (isRight && !isDown && !isLeft && !isUp) {
            arr.push(matrix[i][j]);
            if (j < matrix[i].length - 1 - counterEdge) {
                j++;
                isRight = true;
            } else {
                i++;
                isRight = false;
                isDown = true;
            }
        } else if (!isRight && isDown && !isLeft && !isUp) {
            arr.push(matrix[i][j]);
            if (i < matrix.length - 1 - counterEdge) {
                i++;
                isDown = true;
            } else {
                console.log('else', i, j)
                j--;
                isDown = false;
                isLeft = true;
            }
        } else if (!isRight && !isDown && isLeft && !isUp) {
            arr.push(matrix[i][j]);
            if (j !== counterEdge) {
                j--;
                isLeft = true;
            } else {
                i--;
                isLeft = false;
                isUp = true;
            }
        } else if (!isRight && !isDown && !isLeft && isUp) {
            arr.push(matrix[i][j]);
            if (i !== counterEdge + 1) {
                i--;
                isUp = true;
            } else {
                j++;
                isUp = false;
                isRight = true;
                counterEdge += 1;
            }
        }
        counter--;
    }
    return arr;
}