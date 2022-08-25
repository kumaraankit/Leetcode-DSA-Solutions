// Probem Statement
// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences

var mostWordsFound = function(sentences) {
    let maxValue=-1
    let x=[]
    
    for(let i=0;i<sentences.length;i++){
      x=sentences[i].split(" ")
        if(x.length>maxValue){
            maxValue=x.length
        }
    }
    return maxValue
    
};