/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(let i=1; i<nums.length; i++){
        nums[i] = nums[i] + nums[i-1];
    }

    for(let i=0; i<nums.length; i++){
        const left = i === 0 ? 0 : nums[i-1];
        const right = i === nums.length - 1 ? 0 : nums[nums.length - 1] - nums[i];
        if(left === right){
            return i;
        }
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));