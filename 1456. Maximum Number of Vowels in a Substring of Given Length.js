/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let max = 0;
    for(let i=0; i<k; i++){
        if(vowels.includes(s[i])){
            max++;
        }
    }

    let l = 0;
    let r = k;
    let ans = max;

    while(r < s.length){
        if(vowels.includes(s[l])){
            ans--;
        }
        if(vowels.includes(s[r])){
            ans++;
        }
        max = Math.max(max, ans);
        l++;
        r++;
    }
    return max;
};


console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));