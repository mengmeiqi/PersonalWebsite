/**
 * Created by dell on 2018/1/31.
 */

/*header里面的时间 start*/
var oClock = document.getElementById("clock");
var time = new Date();
var now = time.toString();
oClock.innerHTML = now;
/*header里面的时间 end*/

/*nav 图片下面的字符串 start*/
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
/*nav 图片下面的字符串 end*/

/*section skill 进度条 start*/
window.onload = function() {
    var canvas = document.getElementById('canvas'),  //获取canvas元素
        context = canvas.getContext('2d'),  //获取画图环境，指明为2d
        centerX = canvas.width / 2,   //Canvas中心点x轴坐标
        centerY = canvas.height / 2,  //Canvas中心点y轴坐标
        rad = Math.PI * 2 / 100, //将360度分成100份，那么每一份就是rad度
        speed = 0.1; //加载的快慢就靠它了

    //绘制5像素宽的运动外圈
    function blueCircle(n) {
        context.save();
        context.strokeStyle = "#337ab7"; //设置描边样式
        context.lineWidth = 15; //设置线宽
        context.beginPath(); //路径开始
        context.arc(centerX, centerY, 60, -Math.PI / 2, -Math.PI / 2 + n * rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
        context.stroke(); //绘制
        context.closePath(); //路径结束
        context.restore();
    }

    //绘制白色外圈
    function whiteCircle() {
        context.save();
        context.beginPath();
        context.lineWidth = 15; //设置线宽
        context.strokeStyle = "#AAA";
        context.arc(centerX, centerY, 60, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
        context.restore();
    }

    //百分比文字绘制
    function text(n) {
        context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
        context.strokeStyle = "#AAA"; //设置描边样式
        context.font = "40px Arial"; //设置字体大小和字体
        //绘制字体，并且指定位置
        context.strokeText(n.toFixed(0) + "%", centerX - 30, centerY + 10);
        context.stroke(); //执行绘制
        context.restore();
    }

    //动画循环
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
/*section skill 进度条 end*/

/*section skill 下拉菜单 start*/
$(".taps > span").click(function(){
    $(this).addClass("span-active").siblings("span").removeClass("span-active");
    $(this).next().slideDown().siblings("div").slideUp()
});
/*section skill 下拉菜单 end*/