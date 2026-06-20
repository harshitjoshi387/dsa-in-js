let str="madam"
let rev=""
 for(let i=str.length-1;i>=0;i--){
    rev=rev+str.charAt(i)
 }
if(rev=str){
    console.log(`the ${str} is palindrome`);
    
}
else{
     console.log(`the ${str} is not palindrome`)
}