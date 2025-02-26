/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let m1 = new Map();
    let m2 = new Map();

    for(let i=0; i<grid.length; i++){
        let str1 = '';
        let str2 = '';
        for(let j=0; j<grid.length; j++){
            str1 = str1 + ',' + grid[i][j];
            str2 = str2 + ',' + grid[j][i];
        }
        m1.set(str1, (m1.get(str1) || 0) + 1);
        m2.set(str2, (m2.get(str2) || 0) + 1);
    }

    let ans = 0;
    m1.forEach((val,key) => {
        if(m2.has(key)){
            ans = ans + (val * m2.get(key));
        }
    })

    return ans;
};

console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]))

console.log(equalPairs([[13,13],[13,13]]))
console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]))

console.log(equalPairs([[11,1],[1,11]]))