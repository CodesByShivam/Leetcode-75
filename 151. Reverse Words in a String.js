/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = '';
    let ans = '';

    for(let i=0; i<s.length; i++){
        if(s[i] === ' '){
            ans = word.length > 0 ? word + ' ' + ans : ans;
            word = '';
        } else {
            word = word + s[i];
        }
    }
    return (word.length > 0 ? word + ' ' + ans : ans).trim();
};

// console.log(reverseWords("  hello world"));
// console.log(reverseWords("a good   example"));
console.log(`"${reverseWords("EPY2giL")}"`);