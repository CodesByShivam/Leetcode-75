/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for(let i=0; i<nums.length; i++){
        if(first >= nums[i]){
            first = nums[i];
        }
        else if(second >= nums[i]){
            second = nums[i];
        }
        else {
            return true;
        }
    }
    return false;
};

console.log(increasingTriplet([5,4,3,2,1]));