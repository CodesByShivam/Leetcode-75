/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0;
    let r = 0;
    let n = nums.length;
    let max = 0;

    while(r < n){
        if(nums[r] === 0){
            k--
        }
        if(k >= 0){
            max = Math.max(max, r - l + 1);
        }
        r++;
        if(k < 0){
            if(nums[l] === 0){
                k++;
            }
            l++;
        }
    }

    return max;
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))

console.log(longestOnes([0,0,0,0], 2))