var autoPlay=function(list,width){
    //实验证明getElementsClassName()在chrome和ie中不支持

    var imgul = document.getElementById(list);
    var imglis =imgul.getElementsByTagName("li");
    var cicle=document.getElementById("cicle");
    var ciclelis=cicle.getElementsByTagName("li");
    var len = imglis.length;
    var index=0;
    setInterval(function(){//swtInterval 设定动画时间间隔
        if(index<len){
            imgul.style.transition="left 2s";
        }
        if(index>=len){
            index=0;
            imgul.style.transition="left  0s";
        }


        imgul.style.left=-(width*index)+"px";
        index++;
    },3000)
};
/**
 * Created by lenovo on 2017/2/20.
 */
