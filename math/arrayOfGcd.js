function gcdofArray(nums){
    let max = nums[0];
    let min = nums[0];

    for(let num of nums){
        if(num<min){
            min=num;
        }
        if(num>max){
            max= num;
        }
       
    }
     return  gcd(max,min)
    function gcd(a,b){
        while(b!==0){
            [a,b]=[b,a%b]
        }
        return a;
    }
    
}
console.log(gcdofArray([12,15,21,30]));
