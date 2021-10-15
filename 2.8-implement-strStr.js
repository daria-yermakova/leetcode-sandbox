//8 Implement strStr()
function strStr(haystack, needle) {
    let index = -1;
    if (needle.length === 0) return 0;
    for (let i = 0; i < haystack.length - needle.length; i++) {
        let isEqual = false;
        if (needle.length === 1) {
            if (haystack[i] === needle[0]) {
                index = i;
                break;
            }
        } else {
            for (let j = 0; j <= needle.length - 1; j++) {
                if (j === 0) {
                    if (haystack[i + j] === needle[j]) {
                        isEqual = true;
                    } else break;
                } else if (isEqual && j === needle.length - 1) {
                    if (haystack[i + j] === needle[j]) {
                        index = i;
                        return index;
                    }
                } else if (isEqual) {
                    if (haystack[i + j] === needle[j]) {
                        isEqual = true;
                    } else break;
                }
            }
        }
    }
    return index;
}