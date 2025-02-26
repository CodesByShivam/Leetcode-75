/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    for(let i=0; i<k; i++){
        sum = sum + nums[i];
    }

    let ans = sum / k;

    for(let i=k; i<nums.length; i++){
        sum = sum - nums[i-k] + nums[i];
        ans = Math.max(ans, sum / k);
    }

    return ans;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([5], 1))