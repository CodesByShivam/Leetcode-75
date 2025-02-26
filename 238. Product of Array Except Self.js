/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;

    const prefix = [nums[0]];
    const suffix = new Array(n).fill(0);
    suffix[n-1] = nums[n-1];

    //prefix product
    for(let i=1; i<n; i++){
        prefix.push(prefix[i-1] * nums[i]);
    }

    //suffix product
    for(let i=n-2; i>=0; i--){
        suffix[i] = suffix[i+1] * nums[i];
    }

    console.log(prefix)
    console.log(suffix)

    const ans = [];

    for(let i=0; i<n; i++){
        let p = isNaN(prefix[i-1]) ? 1  : prefix[i-1];
        let s = isNaN((suffix[i+1])) ? 1 : suffix[i+1];
        ans.push(p * s);
    }

    return ans
};

console.log(productExceptSelf([-1,1,0,-3,3]))