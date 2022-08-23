// Problem Statement
// https://leetcode.com/problems/build-array-from-permutation

var buildArray = function(nums) {
    let newBuildArray=[]
    
    // Approach 1
    for(let i=0;i<nums.length;i++){
        newBuildArray.push(nums[nums[i]])
    }
    return newBuildArray
    
    //Approach 2
    
   // return nums.map(arr=>arr[num])
    
};