function loadGrain(levels) {
    if(levels.length < 3 )
      return 0;
    let count = 0;
    let maxHeight = levels[0];
    let maxHeightIndex = 0;
    let tempCount = levels[1];
    for(let i = 1; i < levels.length - 1; i++){
      if(maxHeight <= levels[i]){
          maxHeight = levels[i];
          maxHeightIndex = i;
          if(i!= levels.length - 1 )
            tempCount = levels[i+1];
      }
      else if(i != levels.length - 1){
        if(levels[i+1] > levels[i]){
          if(maxHeight < levels[i+1]){
              count += (maxHeight) * (i - maxHeightIndex) - tempCount
          }
          else{
              count += (levels[i+1]) * (i - maxHeightIndex) - tempCount
              
          tempCount += levels[i+1] + count;
          }
        }
        else{
          tempCount += levels[i+1];
        
        }
      }
    }
    return count;
  }
