//3 Plus One
function plusOne(digits) {
    let large = 0;
    large = digits[digits.length - 1];
    large++;
    if (String(large).length === 1) {
        digits[digits.length - 1] = large;
    } else {
        if (digits.length === 1) {
            digits[digits.length - 1] = +String(large)[0];
            digits.push(+String(large)[1]);
        } else {
            let isNext = true;
            for (let i = digits.length - 1; i >= 0; i--) {
                if (digits[i] === 9 && isNext) {
                    digits[i] = 0;
                    isNext = true;
                    if (i === 0) digits.unshift(1);
                } else if (isNext) {
                    let num = digits[i];
                    num++;
                    digits[i] = num;
                    isNext = false;
                } else isNext = false;
            }
        }
    }
    return digits;
}