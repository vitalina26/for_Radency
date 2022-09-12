function loadGrain(levels) {
        let maxHeight = levels[0];
        let maxHeightIndex = 0;
        let count = 0;
        let tempCount = 0;
        for (let i = 1; i <= levels.length - 1; i++) {
          if (levels[i] >= maxHeight) {
               maxHeight = levels[i];
                maxHeightIndex = i;
                tempCount = 0;
            }
            else {
                count += maxHeight - levels[i];
                tempCount += maxHeight - levels[i];
            }
        }
        if (maxHeightIndex < levels.length - 1) {
  
            count -= tempCount;
            maxHeight = levels[levels.length - 1];
            for (let i = levels.length - 1; i >= maxHeightIndex; i--) {
                if (levels[i] >= maxHeight) {
                    maxHeight = levels[i];
                }
                else {
                    count += maxHeight - levels[i];
                }
            }
        }
        return count;
  }

console.log(loadGrain([4, 1, 3]));//2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));//7
console.log(loadGrain([2, 0, 1, 5, 2, 7]));//6
console.log(loadGrain([2, 4, 2]) );//0
console.log(loadGrain([7, 4]) );//0
console.log(loadGrain([]));//0
console.log(loadGrain([5, 1, 1, 3, 1, 1, 5]));//18
console.log(loadGrain([3, 2, 0, 1]));//1
console.log(loadGrain([15, 0, 6, 10, 11, 2, 5]));//20
console.log(loadGrain([46,37,2,15,33,21,8,30,18,19,24,0,31,3,39]));//266
