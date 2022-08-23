// problem Statement
// https://leetcode.com/problems/final-value-of-variable-after-performing-operations

var finalValueAfterOperations = function(operations) {
    let count=0;
    
    //Approach 1
    for(let i=0;i<operations.length;i++){
        if(operations[i]==='--X' || operations[i]==='X--'){
         count-=1
        }
        
         if(operations[i]==='X++' || operations[i]==='++X'){
           count+=1
        }
        
        
    }
    return count
    
    //Approach 2
    
    for(let i=0;i<operations.length;i++){
        operations[i].includes('-')?count--:count++
    }
    return count
    
};