/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = new Array(nums.length);

    dp[0] = nums[0];
    dp[1] = nums[1];

    let max = Math.max(dp[0], dp[1]);

    for(let i=2; i<nums.length; i++){
        dp[i] = nums[i] + Math.max(dp[i-2], dp[i-3] || 0);
        max = Math.max(max, dp[i]);
    }
    return max;
};


console.log(rob([1,0,3,5]))
console.log(rob([1, 2]))