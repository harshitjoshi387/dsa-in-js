    function commonFactor(a,b){
        while(b!==0){
            [a,b]=[b,a%b]
        }
        return a;
    }


    console.log(commonFactor(12,18));
    