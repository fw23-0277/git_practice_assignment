let str = "mam";
let rev = "";
for(let i=str.length-1;i>=0;i--){
    rev += str[i];
}

if(str==rev){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}