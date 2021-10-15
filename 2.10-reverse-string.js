//10 Reverse String
function reverseString(s) {
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        let curI = s[i];
        s[i] = s[j];
        s[j] = curI;
        i++;
        j--;
    }
    return s;
}