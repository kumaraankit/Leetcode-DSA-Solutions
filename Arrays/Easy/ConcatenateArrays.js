// Problem Statement
// https://leetcode.com/problems/concatenation-of-array/

var getConcatenation = function(nums) {
    
    //Approach 1
    
    let ans =[];
    // ans=nums.concat(nums)
    // return ans;
    
    //Approach 2
    
    // ans=[...nums,...nums]
    // return ans
    
    //Approach 3
    for(let i=0;i<nums.length*2;i++){
        ans.push(nums[i%nums.length])
    }
    return ans
    
};