/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();

    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1);
        }
        else {
            map.set(arr[i], 1);
        }
    }

    let set = new Set(map.values());
    return set.size === map.size;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));