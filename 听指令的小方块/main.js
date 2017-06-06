/**
 * Created by lenovo on 2017/6/3.
 */
!function(){
    var tbody=document.getElementById('tbody');
    for(var i=0;i<10;i++){
        var tr=document.createElement('tr');
        for(var j=0;j<10;j++){
            var td=document.createElement('td');
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}();
!function(){
    //创建box方块
    var box=document.createElement("div");
    var head=document.createElement("div");
    var body=document.createElement("div");
    box.id="box";
    head.id="head";
    body.id="body";
    box.className="box";
    head.className="thead";
    body.className="tBody";
    box.appendChild(head);
    box.appendChild(body);
    var container=document.getElementById("container");
    container.appendChild(box)
}();
window.onload=function(){
    var direction=0;
    var box=document.getElementById("box");
    var head=document.getElementById("head");
    var body=document.getElementById("body");
    var table=document.getElementById("table");
    var aTd=document.getElementsByTagName("td");
    var aBtn=document.getElementsByTagName("button");
    var goTimer=null;
    var speed=0;
    var boxInfo={
        //direction分别代表上右下左
        direction:0,
        rotate:0
    };
    //实现方块一开始的随机位置
    box.style.top=parseInt(Math.random()*10)*50+"px";
    box.style.left=parseInt(Math.random()*10)*50+"px";
    box.style.transform="rotateZ(0deg)";
    for(var i=0;i<aBtn.length;i++){
        switch (i){
            case 0:
            case 1:
            case 2:
            case 3:
                aBtn[i].index=i;
                aBtn[i].onclick=function(){
                    boxInfo.direction = this.index;
                    TUN(1);
                };
                break;
            case 4:
                aBtn[i].onclick=function(){
                    rotate("rotateRight");
                };
                break;
            case 5:
                aBtn[i].onclick=function(){
                    rotate("rotateLeft");
                };
                break;
            case 6:
                aBtn[i].onclick=function(){
                    rotate("rotateOposite");
                    if(boxInfo.direction==3){
                        boxInfo.direction=1;
                    }else{
                        boxInfo.direction+=2;
                    }
                };
                break;
        }
    }
    var Go=document.getElementById("go");
    //定义点击事件，每次点击根据方块的角度改变direction
    Go.onclick=function(){
        var number=document.getElementById("num");
        var text=box.style.transform;
        var pattern=/\(((.+?)deg)\)/g;
        var matches=pattern.exec(text);
        if(matches[2]==("360"||"-360")){
            box.style.transform="rotate(0deg)";
        }
        switch (matches[2]){
            case "0":
                boxInfo.direction=0;
                break;
            case "90":
            case "-270":
                boxInfo.direction=1;
                break;
            case "180":
            case "-180":
                boxInfo.direction=2;
                break;
            case "270":
            case "-90":
                boxInfo.direction=3;
                break;
        }
        TUN(number.value);

    };
    //TUN()函数根据direction的值进行运动
    function  TUN(num){
        switch (boxInfo.direction){
            case 2:
                if(box.offsetTop>=450){
                    alert("撞墙了");
                }else{
                    go("top",50,num)
                }
                break;
            case 0:
                if(box.offsetTop<=0){
                    alert("撞墙了")
                }else{
                    go("top",-50,num);
                }
                break;
            case 1:
                if(box.offsetLeft>=450){
                    alert("撞墙了")
                }else{
                    go("left",50,num);
                }
                break;
            case 3:
                if(box.offsetLeft<=0){
                    alert("撞墙了")
                }else{
                    go("left",-50,num);
                }
                break;
        }
    };
    //点击按钮改变方块的角度，使用正则表达式获取到原来的旋转角度
    function rotate(turnDir){
        var text=box.style.transform;
        var pattern=/\(((.+?)deg)\)/g;
        var matches=pattern.exec(text);
        if(turnDir==="rotateRight"){
            box.style.transform="rotateZ("+(Number(matches[2])+90)+"deg)";
        }else if(turnDir==="rotateLeft"){
            box.style.transform="rotateZ("+(Number(matches[2])-90)+"deg)";
        }else if(turnDir==="rotateOposite"){
            box.style.transform="rotateZ("+(Number(matches[2])+180)+"deg)";
        }

    }
    //go函数用来使方块进行运动
    function go(direction,long,i) {
        speed = long / 50;
        if (direction === "top") {
            goTimer = null;
            clearInterval(goTimer);
            box.style.top = box.offsetTop + speed + "px";
            goTimer = setInterval(function () {
                if (box.offsetTop % (long*i) === 0) {
                    clearInterval(goTimer);
                    goTimer = null;
                }
                else {
                    box.style.top = box.offsetTop + speed + "px";
                }
            }, 20)
        }
        else {
            goTimer = null;
            clearInterval(goTimer);
            box.style.left = box.offsetLeft + speed + "px";
            goTimer = setInterval(function () {
                if (box.offsetLeft % (long*i) === 0) {
                    clearInterval(goTimer);
                    goTimer = null;
                }
                else {
                    box.style.left = box.offsetLeft + speed + "px"
                }
            }, 20)
        }
    }
}



