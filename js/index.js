
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
/*nav 图片下面的字符串 end*/

/*nav 导航条 下拉条 start*/
/*
var navContainer = document.getElementById("nav-container");
var num = navContainer.offsetTop;
var a = navContainer.offsetHeight;
var navBox = document.getElementById("nav-box");
var aLi = navBox.getElementsByTagName("li");
var aBlock = document.getElementsByClassName("block");
var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
*/
$(function(){
    var oHeader = document.getElementById("header");
    var oNav = document.getElementById("nav");
    var aA = oNav.getElementsByTagName("a");
    var aLi = oNav.getElementsByTagName("li");
    var aBlock = document.getElementsByClassName("block");
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var h = oHeader.offsetHeight + oNav.offsetHeight ;
    for(var i=0;i<aLi.length;i++){
        aLi[i].onclick = function(){
            var href = $(this).children("a").attr("href");
            var top = $(href).offset().top;
            $("body,html").animate({
                "scrollTop":top - h
            },1000);
            history.pushState(top, "");
            $(this).addClass("active").siblings().removeClass("active");
        }
    }
    window.onpopstate = function(e){
        $(document.body).animate({
            scrollTop : e.state
        }, 1000);
    };
    window.scroll = function() {
        for (var i = 0; i < aBlock.length; i++) {
            aBlock[i].index = i;
            if (scrollTop >= h) {//下滚
                if (scrollTop - h >= aBlock[i].offsetTop) {
                    for(var i=0;i<aLi.length;i++){
                        aLi[i].className = "";
                    }
                    aLi[this.index].className = "active";
                }
            }
            else {//上滚
                if (h - scrollTop < aBlock[i].offsetTop) {
                    for(var i=0;i<aLi.length;i++){
                        aLi[i].className = "";
                    }
                    aLi[this.index].className = "active";
                }
            }
        }
    }
});

/*nav 导航条 下拉条 end*/

/*section skill 进度条 start*/
window.onload = function(){
    show();
    function toCanvas(id ,progress){
        var canvas = document.getElementById(id),
            ctx = canvas.getContext("2d"),
            percent = progress,
            circleX = canvas.width / 2,
            circleY = canvas.height / 2,
            radius = 60,
            lineWidth = 5,
            fontSize = 20;
        function smallcircle1(cx, cy, r) {
            ctx.beginPath();
                ctx.moveTo(cx + r, cy);
            ctx.lineWidth = 1;
            ctx.fillStyle = '#06a8f3';
            ctx.arc(cx, cy, r,0,Math.PI*2);
            ctx.fill();
        }
        function smallcircle2(cx, cy, r) {
            ctx.beginPath();
                ctx.moveTo(cx + r, cy);
            ctx.lineWidth = 1;
            ctx.fillStyle = '#00f8bb';
            ctx.arc(cx, cy, r,0,Math.PI*2);
            ctx.fill();
        }
        function circle(cx, cy, r) {
            ctx.beginPath();
            //ctx.moveTo(cx + r, cy);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = '#eee';
            ctx.arc(cx, cy, r, 0,Math.PI*2);
            ctx.stroke();
        }
        function sector(cx, cy, r, startAngle, endAngle, anti) {
            ctx.beginPath();
            //ctx.moveTo(cx, cy + r); // 从圆形底部开始画
            ctx.lineWidth = lineWidth;
            // 渐变色 - 可自定义
            var linGrad = ctx.createLinearGradient(
                circleX-radius-lineWidth, circleY, circleX+radius+lineWidth, circleY
            );
            linGrad.addColorStop(0.0, '#06a8f3');
            //linGrad.addColorStop(0.5, '#9bc4eb');
            linGrad.addColorStop(1.0, '#00f8bb');
            ctx.strokeStyle = linGrad;
            ctx.lineCap = 'round';
            ctx.arc(
                cx, cy, r,
                (Math.PI*2/3),
                (Math.PI*2/3) + endAngle/100 * (Math.PI*5/3),
                false
            );
            ctx.stroke();
        }
        function loading() {
            if (process >= percent) {
                clearInterval(circleLoading);
            }
            ctx.clearRect(0, 0, circleX * 2, circleY * 2);
            ctx.font = fontSize + 'px April';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#999';
            ctx.fillText(parseFloat(process).toFixed(0) + '%', circleX, circleY);
            circle(circleX, circleY, radius);
            sector(circleX, circleY, radius, Math.PI*2/3, process);
            if (process / percent > 0.90) {
                process += 0.30;
            } else if (process / percent > 0.80) {
                process += 0.55;
            } else if (process / percent > 0.70) {
                process += 0.75;
            } else {
                process += 1.0;
            }
        }
        var process = 0.0;
        var circleLoading = window.setInterval(function () {
            loading();
        }, 20);
    }
    toCanvas("circle-1",93);
    toCanvas("circle-2",95);
    toCanvas("circle-3",90);
    toCanvas("circle-4",85);
    toCanvas("circle-5",90);
    toCanvas("circle-6",80);
};
/*section skill 进度条 end*/

/*section skill 下拉菜单 start*/
$(".taps > span").click(function(){
    $(this).addClass("span-active").siblings("span").removeClass("span-active");
    $(this).next().slideDown().siblings("div").slideUp();
});
/*section skill 下拉菜单 end*/
