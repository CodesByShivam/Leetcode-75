/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    if (chars.length <= 1) return chars.length;

    let n = chars.length;
    let p = 0;

    let count = 1;
    for (let i = 0; i < n; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
        }
        else {
            if (count > 1) {
                p++;
                count.toString().split("").forEach(c => {
                    chars[p] = c;
                    p++;
                })
                chars[p] = chars[i + 1];
                count = 1;
            } else {
                p++;
                chars[p] = chars[i + 1];
            }
        }
    }
    return p;
};

console.log(compress(["a","a","b","b","c","c","c"]))