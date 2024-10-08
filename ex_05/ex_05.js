function findClosestResult(functionsObj, inputNumber, outputNumber) {
    let cKey = null;
    let cDiff = Infinity;
  
    for (let key in functionsObj) {
      let result = functionsObj[key](inputNumber);
      let diff = Math.abs(result - outputNumber);
  
      if (diff < cDiff) {
        cDiff = diff;
        cKey = key;
      }
    }
    return cKey;
  }
  
  const fObj = {};
  fObj.multipleByEight = (x) => x * 8;
  fObj.square = (x) => x * x;
  fObj.addSixty = (x) => x + 60;
  
//   console.log(findClosestResult(fObj, 5, 26));
//   console.log(findClosestResult(fObj, 10, 5)); 
//   console.log(findClosestResult(fObj, 5, 45));