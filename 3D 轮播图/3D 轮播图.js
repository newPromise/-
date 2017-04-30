/**
 * Created by lenovo on 2017/4/30.
 */
var imgs=document.getElementsByTagName("img");
var order=0;
function move() {
    //对于每一个img元素都发生变化
    for (var i = 0; i < imgs.length; i++) {
        (function(index){
            imgs[index].cur = 60 * (index + order - 1);
            imgs[index].target = 60 * (index + order);
            imgs[index].timer = setInterval(function () {
                imgs[index].speed = (imgs[index].target - imgs[index].cur) / 1000;

                imgs[index].speed = imgs[index].speed > 0 ? Math.ceil(imgs[index].speed) : Math.floor(imgs[index].speed);

                if (imgs[index].cur + imgs[index].speed == imgs[index].target) {
                    clearInterval(imgs[index].timer);
                } else {
                    imgs[index].cur = imgs[index].cur + imgs[index].speed;
                    imgs[index].style.transform = "rotateY(" +(imgs[index].cur + imgs[index].speed) + "deg)  translateZ(500px)  translateY(200px)";
                }
            }, 10);
        })(i);
    }
    order++;
    if(order>6){
        order=0;
    }

}
move();
setInterval(move,4000);