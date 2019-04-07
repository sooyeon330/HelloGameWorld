var count=0;
var j=0;
function start(){
    alert("베스킨라빈스를 시작합니다");
    alert("가위바위보로 선공을 정하세요");
    while(true){
        you = prompt("가위 : 1  바위 : 2  보 : 3");
        if(you != 1 && you !=2 && you!=3) {alert("다시 입력해주세요@@"); continue;}
        pc = parseInt(Math.random()*3)+1;
        result = ((you-pc+3)%3);
            if(result==1){
                alert("당신의 승리! 먼저 시작하세요"); use("plus"); break;}
            else if(result==2){
                alert("당신의 패배! 컴퓨터가 먼저시작합니다."); com(); break;}
            else if(result==0){
                alert("무승부! 다시하세요."); continue;}
    }//while
}//start
function plus(){ 
    document.getElementById("inner").value = ++count;
}
function use(a){
    if(a=="plus"){
       if(j==3) {
            com(); j=0;}
        else if(j<3){
            j++; plus(); if(count>=31){
                alert("당신이 졌습니다!");history.go(-1);}
            }
    }
    else if(a =="stop") { j=0; com();}
    else alert("--");
}
function com(){
    alert("컴퓨터차례입니다.");
    c =  parseInt(Math.random()*3)+1;
    count+=c;
    document.getElementById("inner").value = count;
    if(count>=31){alert("당신이 이겼습니다!");history.go(-1); }    
}