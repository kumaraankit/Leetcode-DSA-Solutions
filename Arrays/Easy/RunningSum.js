// Problem Statement
// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function(nums) {
    let ans=[];
    let sum=0;
    
    //Approach 1
    // for(let i=0;i<nums.length;i++){
    //     sum+=nums[i]
    //     ans.push(sum)
    // }
    // return ans
    
    //Approach 2
   ans=nums.map((x)=>sum+=x)
    return ans
};
