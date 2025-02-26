/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const dp = new Array(n+1);

    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 5;

    if(n <= 3){
        return dp[n];
    }

    for(let i=4; i<=n; i++){
        dp[i] = (2 * dp[i-1] + dp[i-3]) % 1000000007;
    }

    return dp[n]
};

console.log(numTilings(5));