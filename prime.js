let num = 12;
let count = 0;
for(let i=2;i<=num**0.5;i++){
    if(num%2==0){
        count++;
    }
}
if(count==0){
    console.log("Prime");
}else{
    console.log("Not Prime")
}