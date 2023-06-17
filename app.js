let cells=['','','','','','','','',''];
let currentplayer='X';
let result=document.querySelector('.result');
let btns=document.querySelectorAll('.btn');
let conditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];
const ticTacToe=(element,index)=>{
    element.value=currentplayer;
    element.disable=true;
    cells[index]=currentplayer;
    currentplayer=currentplayer=='X'?'O':'X';
    result.innerHTML = `Player ${currentplayer} Turn`;

    for(let i=0;i<conditions.length;i++){
          let condition=conditions[i];
          let a=cells[condition[0]];
          let b=cells[condition[1]];
          let c=cells[condition[2]];
          if(a==''||b==''||c==''){
            continue;
          }
          if((a==b)&&(b==c)){
            result.innerHTML=`Player ${a} Won &#128525`;
            btns.forEach((btn)=>btn.disable=true);
          }
    }
};

function reset(){
    cells=['','','','','','','','',''];
    btns.forEach((btn)=>{
        btn.value='';
    });
    currentplayer='X';
    result.innerHTML=`Player X Turn`;
    btns.forEach((btn)=>btn.disable=false);
};

document.querySelector('#reset').addEventListener('click',reset);

btns.forEach((btn,i)=>{
     btn.addEventListener('click',()=>ticTacToe(btn,i));
});