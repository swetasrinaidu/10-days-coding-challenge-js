const btn0=document.getElementById("btn0");
const btn1=document.getElementById("btn1");
const btnClr=document.getElementById("btnClr");
const btnEql=document.getElementById("btnEql");
const btnSum=document.getElementById("btnSum");
const btnSub=document.getElementById("btnSub");
const btnMul=document.getElementById("btnMul");
const btnDiv=document.getElementById("btnDiv");
const res= document.getElementById("res");

var operand1="";
var operand2="";
var sign="";
var signFlag = false;

btn0.addEventListener("click",()=>{
        if(signFlag) operand2+=0;
        else operand1+=0;
        res.innerHTML+= btn0.innerHTML; 
}); 
btn1.addEventListener("click",()=>{
    if(signFlag) operand2+=1;
    else operand1+=1;
     res.innerHTML+= btn1.innerHTML;
});

btnSum.addEventListener("click",()=>{
    signFlag = true;
    sign="+";
    res.innerHTML+="+";
})
btnSub.addEventListener("click",()=>{
    signFlag = true;
    sign="-";
    res.innerHTML+="-";
})
btnMul.addEventListener("click",()=>{
    signFlag = true;
    sign="*";
    res.innerHTML+="*";
})
btnDiv.addEventListener("click",()=>{
    signFlag = true;
    sign="/";
    res.innerHTML+="/";
})
btnClr.addEventListener("click",()=>{
    signFlag = false;
    res.innerHTML="";
    operand1="";
    operand2="";
});

btnEql.addEventListener("click",()=>{
     signFlag = false;
     res.innerHTML=calculateResult(getDecimal(operand1),getDecimal(operand2),sign);
})

function getDecimal(operand){
    let result = parseInt(operand,2);
    return result;
}

function calculateResult(num1,num2,operator){
    switch(operator){
        case "+":
            return(getBinary(num1+num2));
        case "-":
            return(getBinary(num1-num2));
        case "*":
            return(getBinary(num1*num2));
        case "/":
            return(getBinary(num1/num2));                    
    }
}

function getBinary(num){
    return (Number(num).toString(2));
}
