/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ans = '';
    let i=0;
    while( i < Math.min(word1.length, word2.length)){
        ans = ans + word1[i] + word2[i];
        i++;
    }
    return word1.length === word2.length ? ans : word1.length > word2.length ? ans + word1.substring(i) : ans + word2.substring(i);
};

console.log(mergeAlternately('ab', 'pqrs'));