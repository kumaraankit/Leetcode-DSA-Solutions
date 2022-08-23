// Problem Statment
// https://leetcode.com/problems/shuffle-the-array

var shuffle = function(nums, n) {
    let result=[]
    middleValue=Math.ceil(nums.length/2)
    let firstArray=nums.splice(0,middleValue)
    let secondArray=nums.splice(-middleValue)
    
    for(let i=0;i<n;i++){
        result.push(firstArray[i],secondArray[i])
    }
    return result
};