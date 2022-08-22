function getMaxLessThanK(n,k){
    let maxAnd=0;
    let tempAnd =0;
     for(let i=1;i<n;i++){
        for(let j=i+1;j<n;j++){
             tempAnd=(i & j);
             console.log("tempAnd",tempAnd);
             if(tempAnd > maxAnd & tempAnd < k) 
                maxAnd = tempAnd;              
             console.log("maxAnd",maxAnd);

        }
     }
     return maxAnd;
}
console.log(getMaxLessThanK(9,2));

    
