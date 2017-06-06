/**
 * Created by lenovo on 2017/6/6.
 */
var ranCol;
var ranRow;
var score=0;
var timer;
var array=[];
var oBody=document.getElementById("tbody");
//定义info的属性directions,用来定义蛇的运动方向
var info={
    directions:1
};
//一开始的蛇身

//addNum用来绘制方格上侧和左侧的数字编号
function addNum(){
    var oRow=document.getElementsByClassName("row")[0];
    var oCol=document.getElementsByClassName("col")[0];
    for(var i=0;i<10;i++){
        var num=document.createElement("span");
        num.innerText=i+1;
        oCol.appendChild(num);
    }
    for(var i=0;i<10;i++){
        var num=document.createElement("span");
        num.innerText=i+1;
        oRow.appendChild(num);
    }
}
addNum();
//addTd用来绘制方格，一共10*10个方格数目
function addTd(){
    for(var i=0;i<10;i++){
        var oTr=document.createElement("tr");
        for(var j=0;j<10;j++){
            var oTd=document.createElement("td");
            oTr.appendChild(oTd)
        }
        oBody.appendChild(oTr)
    }
}
addTd();
function position(x,y){
    var tr=document.getElementsByTagName("tr")[x];
    var td=tr.getElementsByTagName("td")[y];
    return td;
}
//定义蛇身一开始的位置
for(var i=1;i<4;i++){
    position(2,i).className="active";
    array.push([2,i]);
}
function init(){
    for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].className="";
        }
    }
}
//keyCode()函数用来表示当按下不同的方向键的时候，改变info.directions
function keyCode(){
    document.onkeydown=function(e){
        e=e||event;
        if(e.keyCode==83){
            info.directions=2
        }else if(e.keyCode==65){
            info.directions=3
        }else if(e.keyCode==68){
            info.directions=1
        }else if(e.keyCode==87){
            info.directions=0

        }
    }
}
//randomFood()用来生成随机食物

function randomFood(){
    ranRow=parseInt(Math.random()*10);
    ranCol=parseInt(Math.random()*10);
    for(var i=0;i<array.length;i++){
        if((array[i][0]==ranCol)&&(array[i][1]==ranRow)){
            randomFood();
        }else{
            position(ranCol,ranRow).className="food";
        }

    }
}
randomFood();
//Juge函数用来判断，如果蛇碰到边界或者蛇碰到自己，则弹出alert(game over)
function Juge(arr){
    var arrStr = JSON.stringify(arr);
    var bJuge=false;
    for (var i = 0; i < arr.length; i++) {
        if (arrStr.indexOf(arr[i]) != arrStr.lastIndexOf(arr[i])){
            bJuge=true;
        }
        if((array[array.length-1][0]==10)||(array[array.length-1][1]==10)||(array[array.length-1][0]==-1)||(array[array.length-1][1]==-1)){
            bJuge=true;
        }
    }
    if(bJuge){
        alert("Game Over");
        clearInterval(timer);
    }
}
//move函数用来控制蛇的运动
function move(){
    timer=setInterval(function(){
        keyCode();
        init();
        //现在需要的是改变数组内的数据就可以了
        switch(info.directions){
            case 0:
                var Top=array[array.length-1][0]-1;
                array.push([Top,array[array.length-1][1]]);
                array.shift();
                break;
            case 2:
                var Down=array[array.length-1][0]+1;
                array.push([Down,array[array.length-1][1]]);
                array.shift();
                break;
            case 1:

                var Left=array[array.length-1][1]+1;
                array.push([array[array.length-1][0],Left]);
                array.shift();

                break;
            case 3:
                var Right=array[array.length-1][1]-1;
                array.push([array[array.length-1][0],Right]);
                array.shift();
                break;
        }
        //进行判断
        Juge(array);
        for(var i=0;i<array.length;i++){
            document.getElementsByTagName("tr")[array[i][0]].getElementsByTagName("td")[array[i][1]].className="active";
            document.getElementsByTagName("tr")[ranCol].getElementsByTagName("td")[ranRow].className="food";
            if((array[array.length-1][0]==ranCol)&&(array[array.length-1][1]==ranRow)){
                array.unshift([ranCol,ranRow]);
                randomFood();
                score++;
                document.getElementById("score").innerHTML=score;
            }
        }

    },1000)
}
move();