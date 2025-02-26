/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let n = nums.length;
    nums.sort((a,b) => a-b)
    let l = 0;
    let r = n-1;
    let count = 0;
    while(l < r){
        if(nums[l] + nums[r] === k){
            count++;
            l++;
            r--;
        } else if(nums[l] + nums[r] < k){
            l++
        }
        else {
            r--;
        }
    }
    return count;
};

console.log(maxOperations([1,2,3,4], 5));
console.log(maxOperations([3,1,3,4,3], 6));
console.log(maxOperations([1,3,3,4,2], 6));