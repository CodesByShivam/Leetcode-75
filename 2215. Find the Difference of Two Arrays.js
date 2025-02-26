/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let hm1 = new Set();
    let hm2 = new Set();
    for(let i=0; i<nums1.length; i++){
        hm1.add(nums1[i]);
    }

    for(let i=0; i<nums2.length; i++){
        hm2.add(nums2[i]);
    }

    let ans1 = new Set();
    let ans2 = new Set();

    for(let i=0; i<nums1.length; i++){
        if(!hm2.has(nums1[i])){
            ans1.add(nums1[i]);
        }
    }

    for(let i=0; i<nums2.length; i++){
        if(!hm1.has(nums2[i])){
            ans2.add(nums2[i]);
        }
    }

    return [[...ans1], [...ans2]]
};

console.log(findDifference([1,2,3,3], [1,1,2,2]))