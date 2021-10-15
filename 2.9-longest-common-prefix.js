//9 Longest Common Prefix
function longestCommonPrefix(strs) {
    let com = strs[0];
    let res = '';
    let isEndOfPrefix = false;
    if (strs.length === 1) return strs[0];
    for (let i = 0; i < com.length; i++) {
        let isEqual = false;
        if (!isEndOfPrefix) {
            for (let j = 1; j < strs.length; j++) {
                if (j === 1) {
                    if (com[i] === strs[j][i]) {
                        isEqual = true;
                        res += com[i];
                    } else {
                        isEqual = false;
                        isEndOfPrefix = true;
                        break;
                    }

                } else if (isEqual) {
                    if (res[i] === strs[j][i]) {
                        isEqual = true;
                    } else {
                        isEqual = false;
                        isEndOfPrefix = true;
                        res = res.substring(0, res.length - 1);
                        break;
                    }
                } else break;

            }
        } else break;
    }
    return res;
}