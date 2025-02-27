/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;

    while(j < t.length && i < s.length){
        if(s[i] === t[j]){
            i++;
            j++;
        }
        else {
            j++;
        }
    }
    return i === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))