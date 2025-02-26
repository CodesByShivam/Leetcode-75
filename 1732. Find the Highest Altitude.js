/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currHeight = 0;
    let max = 0;
    for(let i=0; i<gain.length; i++){
        currHeight = currHeight + gain[i];
        max = Math.max(max, currHeight);
    }
    return max;
};

console.log(largestAltitude([-5,1,5,0,-7]));
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));