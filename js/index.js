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
function show() {
    var oTypewriter = document.getElementById("typewriter");
    var code = oTypewriter.innerHTML;
    var i = 0;
    oTypewriter.innerHTML = "";
    typeWriting();

    function typeWriting() {
        i++;
        if (i <= code.length) {
            switch (code.charAt(i)) {
                case '<':
                    i = code.indexOf(">", i);
                    break;
                case '&':
                    i = code.indexOf(";", i);
                    break;
            }
            oTypewriter.innerHTML = code.substr(0, i);
            setTimeout(typeWriting, 150);
        } else {
            setTimeout(show, 2000);
        }
    }
}
window.onload = show;
/*nav ͼƬ������ַ��� end*/