// problem statement
// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/


var kWeakestRows = function(mat, k) {
    
    let hash={}
    let initialValue=0;
    for(let i=0;i<mat.length;i++){
        hash[i]=mat[i].reduce((a,b)=>a+b,initialValue)
    }
      return Object.keys(hash).sort((a,b)=>hash[a]-hash[b]).slice(0,k)
  };