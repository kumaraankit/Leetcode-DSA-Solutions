//Problem statement
 //https://leetcode.com/problems/richest-customer-wealth/

 var maximumWealth = function(accounts) {
    let maximumWealthSum=0;
    
    for(let i=0;i<accounts.length;i++){
        let wealth=0
        for(let j=0;j<accounts[i].length;j++){
            wealth+=accounts[i][j];
        }
        maximumWealthSum=Math.max(maximumWealthSum,wealth)
    }
    return maximumWealthSum;
    
};