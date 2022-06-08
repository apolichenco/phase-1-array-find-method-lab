function superbowlWin(array){
    let results = array.find(winFinder);
  console.log(results)
    if (typeof results === `undefined`){
        return results
    }
    else{
        return results.year
    }
   }
   function winFinder(element){
     return (element.result === `W`);
   }