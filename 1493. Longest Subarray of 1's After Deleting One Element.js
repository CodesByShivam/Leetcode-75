/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let l = 0;
    let r = 0;
    let max = 0;
    let k=1;

    while(r < nums.length){
        if(nums[r] === 0){
            k--;
        }

        if(k >= 0){
            max = Math.max(max, r-l);
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

console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))
console.log(longestSubarray([1,1,0,1]))
console.log(longestSubarray([1,1,1]))
console.log(longestSubarray([0,0,0]))