/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length){
        return false;
    }

    let a1 = new Array(26).fill(0);
    let a2 = new Array(26).fill(0);

    const charCodeA = 'a'.charCodeAt(0);

    for(let i=0; i<word1.length; i++){
        a1[word1.charCodeAt(i) - charCodeA]++;
        a2[word2.charCodeAt(i) - charCodeA]++;
    }

    for(let i=0; i<26; i++){
        if((a1[i] > 0 && a2[i] === 0) || (a1[i] === 0 && a2[i] > 0)){
            return false;
        }
    }

    a1.sort((a,b) => a-b);
    a2.sort((a,b) => a-b);

    for(let i=0; i<26; i++){
        if(a1[i] !== a2[i]){
            return false;
        }
    }
    return true;
};