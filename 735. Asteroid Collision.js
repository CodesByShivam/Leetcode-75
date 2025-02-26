/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    let top = -1;

    for(let i=0; i<asteroids.length; i++){
        if(asteroids[i] >= 0 || (asteroids[i] < 0 && stack[top] < 0)){
            stack.push(asteroids[i]);
            top++;
        }
        else if(asteroids[i] < 0){
            while(stack[top] > 0 && stack[top] <= Math.abs(asteroids[i])){
                top--;
            }
            console.log(stack[top]);
            if(!(stack[top] > 0)){
                stack.push(asteroids[i]);
            }
        }
    }

    return stack;
};

// console.log(asteroidCollision([5,10,-5]))
console.log(asteroidCollision([8,-8]))
// console.log(asteroidCollision([3,2,-5]))