for(let i = 1; i< 10; i++) {
    const btn = document.createElement("button");
    btn.id = "btn"+i;
    btn.innerHTML = i;
    btn.classList.add("btn");
    console.log(btn)
    document.getElementById("btns").appendChild(btn);
}
const click=[[1,2,3,4,5,6,7,8,9],[4,1,2,7,5,3,8,9,6],[7,4,1,8,5,2,9,6,3],
             [8,7,4,9,5,1,6,3,2],[9,8,7,6,5,4,3,2,1],[6,9,8,3,5,7,2,1,4],
             [3,6,9,2,5,8,1,4,7],[2,3,6,1,5,9,4,7,8],[1,2,3,4,5,6,7,8,9]];
var count = 0;
document.getElementById("btn5").addEventListener("click", () => {
    count++;
    btn1.innerHTML=click[count][0];
    btn2.innerHTML=click[count][1];
    btn3.innerHTML=click[count][2];
    btn4.innerHTML=click[count][3];
    btn5.innerHTML=click[count][4];
    btn6.innerHTML=click[count][5];
    btn7.innerHTML=click[count][6];
    btn8.innerHTML=click[count][7];
    btn9.innerHTML=click[count][8];
});