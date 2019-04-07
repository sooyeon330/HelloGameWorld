//클릭하면 카드뒤집고 아이디가 매개변수인카운트함수 호출해 3번이상클릭시 카드 이미지로 바꿈
//3번2하일시 각 아이디별 카운트 하고 카운트가 2일시 성공표시후 다시 안뒤집어 지게 하는것
var one=0,two=0,three=0,four=0,five=0,six=0,seven=0,eghit=0;
var count=0;
var win=0;
function success(){
    alert("성공!!"); count=0; win++;
    if(win==8){alert("축하합니다! 카드를 모두 맞추셨습니다!!");
               location.reload(); }
}
function fail(){
   if(count==2){ alert("실패");
            if(one<2){          
             m.src="image/card.png";
             o.src="image/card.png";
             count=0;one=0;
            }
            if(two<2){
             j.src="image/card.png";
             l.src="image/card.png";
            count=0; two=0;
            }
            if(three<2){
             a.src="image/card.png";
             b.src="image/card.png";
            count=0; three=0;
            }
            if(four<2){
             d.src="image/card.png";
             g.src="image/card.png";
            count=0; four=0;
            }
            if(five<2){
             e.src="image/card.png";
             p.src="image/card.png";
            count=0; five=0;
            }
            if(six<2){
             c.src="image/card.png";
             f.src="image/card.png";
            count=0; six=0;
            }
            if(seven<2){
             n.src="image/card.png";
             k.src="image/card.png";
            count=0; seven=0;
            }
            if(eghit<2){
             h.src="image/card.png";
             i.src="image/card.png";
            count=0; eghit=0;
            }
        } 
}
function Count(su){
//alert("count"+count);
    if(count>2){ count=0; su.src="image/card.png"}
    else{  
        switch(su){
         case m: case o : one++; 
                if(count==2&&one==2){ success(); break;}
                else fail(); 
                break;
        case j : case l: two++;
                if(count==2&&two==2){success(); break;}
                else fail();
                break;
        case a: case b: three++;
                if(count==2&&three==2){ success(); break;}
                else fail();
                break;
        case d : case g : four++;
                if(count==2&&four==2){ success(); break;}
                else fail();
                break;
        case e: case p : five++; 
                if(count==2&&five==2){ success(); break;}
                else fail();
               break;
        case c: case f: six++;
                if(count==2&&six==2){ success(); break;}
                else fail();
                break;
        case n : case k : seven++; 
                if(count==2&&seven==2){ success(); break;}
                else fail();
               break;        
        case h : case i : eghit++; 
                if(count==2&&eghit==2){ success(); break;}
                else fail();
                break;  
        }//switch
       
    }//else
}//count
function changeimage13() {
    if (m.src.match("card"))
        m.src = "image/1.png";
   count++;  Count(m);
}
function changeimage15() {
    if (o.src.match("card"))
        o.src = "image/1.png";
    count++; Count(o);
}
function changeimage10() {
    if (j.src.match("card")) 
        j.src = "image/2.png";
    count++; Count(j);
}
function changeimage12() {
    if (l.src.match("card")) 
        l.src = "image/2.png";
   count++;  Count(l);
}
function changeimage1() {
    if (a.src.match("card")) 
        a.src = "image/3.png";
    count++; Count(a);
}
function changeimage2() {
    if (b.src.match("card")) 
        b.src = "image/3.png"; 
       count++; Count(b);
}
function changeimage4() {
    if (d.src.match("card")) 
        d.src = "image/4.png";
  count++; Count(d);
}
function changeimage7() {
    if (g.src.match("card")) 
        g.src = "image/4.png";
    count++; Count(g);
}
function changeimage5() {
   if (e.src.match("card")) 
        e.src = "image/5.png";
     count++;Count(e);
}
function changeimage16() {
    if (p.src.match("card"))
        p.src = "image/5.png";
   count++;  Count(p);
}
function changeimage3() {
    if (c.src.match("card")) 
        c.src = "image/6.png";
    count++; Count(c);
}
function changeimage6() {
    if (f.src.match("card")) 
        f.src = "image/6.png";
    count++; Count(f);
}
function changeimage11() {
    if (k.src.match("card")) 
        k.src = "image/7.png";
    count++; Count(k);
}
function changeimage14() {
    if (n.src.match("card"))
        n.src = "image/7.png";
    count++; Count(n);
}
function changeimage8() {
    if (h.src.match("card")) 
        h.src = "image/8.png";
    count++; Count(h);
}
function changeimage9() {
    if (i.src.match("card")) 
        i.src = "image/8.png";
    count++; Count(i);
}




