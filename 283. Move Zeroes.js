/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let l = 0;
    let r = 1;
    const n = nums.length;

    while(r < n){
        if(nums[l] === 0 && nums[r] !== 0){
            nums[l] = nums[r];
            nums[r] = 0;
            l++;
            r = l + 1;
        }

        while(nums[l] !== 0 && l < n){
            l++;
            r = l + 1;
        }

        while(nums[r] === 0){
            r++;
        }
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([1,0,1]));
console.log(moveZeroes([0]));
console.log(moveZeroes([1]));
console.log(moveZeroes([1, 0]));
console.log(moveZeroes([0,1]));
console.log(moveZeroes([2,1]));