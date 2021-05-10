// function to sort and store the string ass array
function sortStringArr(str){
    let arr = str.split('');
    let sorted = arr.sort();
    return sorted;
  }

// main function to determine the later added letter
function task(s,t) {
    sortedS = sortStringArr(s);
    sortedT = sortStringArr(t);
    
    for (i = 0; i < sortedT.length; i++) {
        if(sortedS[i] !== sortedT[i]){
            return sortedT[i];
        }
    }
}

console.log(task("helloworld","worldhelloz"));
