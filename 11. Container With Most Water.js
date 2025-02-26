/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length;

    let l = 0;
    let r = n - 1;
    ans = 0;

    while(l < r){
        ans = Math.max(ans, Math.min(height[l], height[r]) * (r - l));
        if(height[r] > height[l]){
            l++
        }
        else{
            r--;
        }
        console.log(height[l], height[r], r-l)
    }
    return ans;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,2,4,3]))