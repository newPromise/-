//这个插件可以实现圆点随图片运动而发生变化，当点击圆点时，可以转到相应的图片、、？？?
//但这个插件函数封装的不是很好，如第12行的#list 表示的是圆点列表的id  ，希望有一天用原生js实现这一功能
var  slideshow=function(ulId,time) {
    var ul = document.getElementById(ulId);
    var list = ul.getElementsByTagName("li");
    var len = list.length;
    var index = 0;


    var showpic = function () {
        $(document).ready(function () {
            var liItem = $("div  #list    li");


            liItem.eq(index).show();
            //有一定时间间隔，间隔后执行函数， 要显示的元素show（）  而兄弟元素显示为hide（）；  在执行函数前，其他元素是没有属性的，执行函数后，兄弟元素显示成了
            //下面点击小圆点显示的时候必须重新定义

            liItem.eq(index).siblings().hide();
            index++;
            if (index > len) {
                index = 0;
            }

            var cicl = $("div #cicle li ");
            cicl.click(function () {

                var inde = cicl.index(this);
                liItem.eq(inde).show();
                //因为这里在函数未开始之前， 其他兄弟元素无显示，
                liItem.eq(inde).siblings().hide();

                cicl.eq(inde).addClass("cicle");
                cicl.eq(inde).siblings().removeClass("cicle");
                index = inde;


            });
            cicl.eq(index - 1).siblings().removeClass("cicle");
            cicl.eq(index - 1).addClass("cicle");
        });
    };
    setInterval(showpic, time);
}
/**
 * Created by lenovo on 2017/2/21.
 */
