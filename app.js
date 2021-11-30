const dob=document.querySelector("#date-of-birth");
const Lnumber=document.querySelector("#lucky-number");
const Cbtn=document.querySelector("#check-button");
const output=document.querySelector("#output");




function calsum(date)
{
date=date.replaceAll("-","");
let sum=0;
for(let i=0;i<date.length;i++)
{
    sum=sum+Number(date.charAt(i));
}
return sum;
}

function compareValues(sum,Lnumber)
{
    if(sum%Lnumber===0)
    {
           output.innerHTML="YOUR BDAY IS LUCKYYY!!!! 🚀🚀" ;
    }
    else
    output.innerHTML="YOUR BDAY IS NOT LUCKYYY!!!! 😑" ;
}


Cbtn.addEventListener("click",function CheckLucky()
{
const date=dob.value;
const sum=calsum(date);
if(sum&&date)
{
    compareValues(sum,Lnumber.value);
}
else
{
    output.innerText="Please enter both the Fields";
}


})