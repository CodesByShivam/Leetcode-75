/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let l = 0;
    let r = s.length - 1;
    s = s.split('');

    while(l < r){
        if(vowels.includes(s[l])){
            while(!vowels.includes(s[r])){
                r--;
            }
            let t = s[l];
            s[l] = s[r];
            s[r] = t;
            r--;
        }
        l++;
    }
    return s.join('');
};

console.log(reverseVowels("ae"));