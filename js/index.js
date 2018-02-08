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

/*section skill ������ start*/
window.onload = function() {
    var canvas = document.getElementById('canvas'),  //��ȡcanvasԪ��
        context = canvas.getContext('2d'),  //��ȡ��ͼ������ָ��Ϊ2d
        centerX = canvas.width / 2,   //Canvas���ĵ�x������
        centerY = canvas.height / 2,  //Canvas���ĵ�y������
        rad = Math.PI * 2 / 100, //��360�ȷֳ�100�ݣ���ôÿһ�ݾ���rad��
        speed = 0.1; //���صĿ����Ϳ�����

    //����5���ؿ���˶���Ȧ
    function blueCircle(n) {
        context.save();
        context.strokeStyle = "#337ab7"; //���������ʽ
        context.lineWidth = 15; //�����߿�
        context.beginPath(); //·����ʼ
        context.arc(centerX, centerY, 60, -Math.PI / 2, -Math.PI / 2 + n * rad, false); //���ڻ���Բ��context.arc(x���꣬y���꣬�뾶����ʼ�Ƕȣ���ֹ�Ƕȣ�˳ʱ��/��ʱ��)
        context.stroke(); //����
        context.closePath(); //·������
        context.restore();
    }

    //���ư�ɫ��Ȧ
    function whiteCircle() {
        context.save();
        context.beginPath();
        context.lineWidth = 15; //�����߿�
        context.strokeStyle = "#AAA";
        context.arc(centerX, centerY, 60, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
        context.restore();
    }

    //�ٷֱ����ֻ���
    function text(n) {
        context.save(); //save��restore���Ա�֤��ʽ����ֻ�����ڸö�canvasԪ��
        context.strokeStyle = "#AAA"; //���������ʽ
        context.font = "40px Arial"; //���������С������
        //�������壬����ָ��λ��
        context.strokeText(n.toFixed(0) + "%", centerX - 30, centerY + 10);
        context.stroke(); //ִ�л���
        context.restore();
    }

    //����ѭ��
    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);
        context.clearRect(0, 0, canvas.width, canvas.height);
        whiteCircle();
        text(speed);
        blueCircle(speed);
        if (speed > 80) speed = 0;
        speed += 0.1;
    }());
};
/*section skill ������ end*/