function load(src,num){
    var container = document.getElementsByClassName("contain")[0];
    var order = 1;
    var mask=document.getElementsByClassName("mask")[0];
    var maskW=document.getElementById("maskW");
    function getViewport(){//获得视口高度和宽度，并且讨论兼容性
        if(document.compatMode=="BackCompat"){//判断是否处于混杂模式
            return {
                width:document.body.clientWidth,
                height:document.body.clientHeight
            };
        }else {
            return {
                width:document.documentElement.clientWidth,
                height:document.documentElement.clientHeight
            };
        }
    }
//设定遮罩的宽度，高度分别等于视口的宽度和高度
    function getStyle(element, attr) {//获取属性函数
        if (getComputedStyle) {
            //  for Firefox,chrome,opera
            var Style = document.defaultView.getComputedStyle(element, null);
            var comStyle = Style[attr]
        } else {
            //for IE
            var Style = element.currentStyle;
            comStyle = Style[attr];
        }
        return parseInt(comStyle);
    }

    function addColumn() {//增加列
        for (var i = 0; i < num; i++) {
            var col = document.createElement("div");
            col.setAttribute("id", "column" + i);
            container.appendChild(col);
        }
    }
    function addDiv() {//给每一列增加一个div
        var temp = new Array(num);
        var hei = Math.random() * 500 + 50;//随机高度
        var imgs = document.createElement("img");
        imgs.innerHTML = order;
        //设置属性
        imgs.setAttribute("title", "点击放大");
        imgs.setAttribute("class", "img");
        imgs.setAttribute("id", "img" + order);//每一个img元素都有一个专属id名
        imgs.onclick = function () {//定义点击事件发生时，注意兼容性
            //scrollTop的兼容性
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            var img = document.createElement("img");
            img.src = imgs.src;//获取正在点击元素的src，将其赋给新创建的img
            container.appendChild(img);
            img.className = "active";
            //注意获取document.body.scrollTop的兼容性
            maskW.style.top = scrollTop + "px";
            maskW.style.display = "block";
        };
        if (order < 10) {
            imgs.setAttribute("src", src+"/pic00" + order + ".jpg");
        } else {
            imgs.setAttribute("src", src+"/pic0" + order + ".jpg");
        }
        imgs.style.height = hei + "px";
        var min;//遍历，将各栏的高度存入temp[i]的数组之中??为什么不能用push
        for (var i = 0; i < num; i++) {
            temp[i] = getStyle(document.getElementById("column" + i), "height");
        }
        min = temp[0];//初始化min=temp[0],后面进行遍历比较，将最小的赋给min
        for (var i = 0; i < num; i++) {
            if (min > temp[i]) {
                min = temp[i];
            }
        }
        for (var i = 0; i < num; i++) {//遍历处理，如果存在一栏的高度为最小高度，就将新建的img放到那一栏上
            if (getStyle(document.getElementById("column" + i), "height") == min) {
                document.getElementById("column" + i).appendChild(imgs);
            }

        }
        order++;
        maskW.onclick = function () {
            for (var i = 0; i < order; i++) {
                var img = container.getElementsByClassName("active")[i];
                maskW.style.display = "none";
                img.parentNode.removeChild(img);//移除元素
            }
        };
    }
//函数执行
    addColumn();//添加5列
    maskW.style.width= getViewport().width+"px";
    maskW.style.height=getViewport().height+"px";
    for(var i=0;i<13;i++){
        addDiv();
    }
    window.onscroll = function () {//定义onscroll,当移动时首先判断几个高度的关系
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        maskW.style.top=document.body.scrollTop+"px";
        //如果隐藏的高度与视口高度之和大于 元素所有的高度，即滚动条拉到了最下面，这进行加载图片操作
        if (scrollTop + document.documentElement.clientHeight >= document.documentElement.offsetHeight ) {
            for(var i=0;i<7;i++){
                addDiv();
            }
        }
    }

}