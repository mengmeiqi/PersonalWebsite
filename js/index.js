/**
 * Created by dell on 2018/1/31.
 */

/*header�����ʱ�� start*/
var oClock = document.getElementById("clock");
var time = new Date();
var now = time.toString();
oClock.innerHTML = now;
/*header�����ʱ�� end*/

/*nav ͼƬ������ַ��� start*/
var oChac = document.getElementById("chac");
var sentence = "Welcome to PersonalWebsite.";
var aStr = [];
var index = 0;
for(var i=0;i<sentence.length;i++){
    var oSentence = sentence.charAt(i);
    aStr.push(oSentence);
    aStr[i].index = i;
}
var str = "";
function Obtain(){
    str = str + aStr[index];
    index++;
    oChac.innerHTML=str;
}
Obtain();
var timer = setInterval(function(){
    Obtain();
    if(index == aStr.length){
        clearInterval(timer);
    }
},300);
/*nav ͼƬ������ַ��� end*/