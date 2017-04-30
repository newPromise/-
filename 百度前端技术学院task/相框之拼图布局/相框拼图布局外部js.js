function     layout(width,height,picnumber,url1,url2,url3,url4,url5,url6){
    var Obody=document.getElementsByTagName("body")[0];
    var Odiv=document.createElement("div");
    Odiv.className="album";
    Odiv.style.width=width;
    Odiv.style.height=height;
    Obody.appendChild(Odiv);
    function  getStyle(element,attr){
        if(getComputedStyle){
            var style=document.defaultView.getComputedStyle(element,null);
            var comstyle=style[attr];
        }
        else{
            var style=element.currentStyle;
            comstyle=style[attr];
        }
        return parseInt(comstyle);
    }
    if(picnumber==1) {
        for (var i = 0; i < picnumber; i++) {
            var img = document.createElement("img");
            img.className = "img1";
            img.setAttribute("src", url1);
            Odiv.appendChild(img);
        }
    }
    if(picnumber==2){
        for (var i = 0; i < picnumber; i++) {
            img = document.createElement("img");
            img.setAttribute("id","img"+i);
            if(i==0){
                img.setAttribute("src", url1);
                img.className="al2_img1";
            }
            if(i==1){
                img.setAttribute("src", url2);
                img.className="al2_img2";
            }
            Odiv.appendChild(img);
        }
    }
    if(picnumber==3){
        for(var i=0;i<picnumber;i++){
            img=document.createElement("img");
            if(i==0){
                img.setAttribute("src", url1);
                img.className="al3_img1";
                img.style.height=getStyle(Odiv,"height")+"px";
                img.style.width=getStyle(Odiv,"width")-(getStyle(Odiv,"height")/2)+"px";
            }
            if(i==1){
                img.setAttribute("src",url2);
                img.className="al3_img2";
                img.style.width=getStyle(Odiv,"height")/2+"px";
                img.style.height=getStyle(Odiv,"height")/2+"px";
            }
            if(i==2){
                img.setAttribute("src",url3);
                img.className="al3_img3";
                img.style.width=getStyle(Odiv,"height")/2+"px";
                img.style.height=getStyle(Odiv,"height")/2+"px";

            }
            Odiv.appendChild(img);
        }

    }
    if(picnumber==4) {
        for (var i = 0; i < picnumber; i++) {
            img = document.createElement("img");
            if (i == 0) {
                img.setAttribute("src", url1);
                img.className = "al4_img1";
                img.style.width = getStyle(Odiv, "width") / 2 + "px";
                img.style.height = getStyle(Odiv, "height") / 2 + "px";
            }
            if (i == 1) {
                img.setAttribute("src", url2);
                img.className = "al4_img2";
                img.style.width = getStyle(Odiv, "width") / 2 + "px";
                img.style.height = getStyle(Odiv, "height") / 2 + "px";

            }
            if (i == 2) {
                img.setAttribute("src", url3);
                img.className = "al4_img3";
                img.style.width = getStyle(Odiv, "width") / 2 + "px";
                img.style.height = getStyle(Odiv, "height") / 2 + "px";

            }
            if (i == 3) {
                img.setAttribute("src", url4);
                img.className = "al4_img4";
                img.style.width = getStyle(Odiv, "width") / 2 + "px";
                img.style.height = getStyle(Odiv, "height") / 2 + "px";

            }
            Odiv.appendChild(img);
        }

    }
    if(picnumber==5) {
        for (var i = 0; i < picnumber; i++) {
            img = document.createElement("img");
            if (i == 0) {
                img.setAttribute("src", url1);
                img.className = "al5_img1";
                img.style.width = 2 * getStyle(Odiv, "width") / 3 + "px";
                img.style.height = 2 * getStyle(Odiv, "height") / 3 + "px";
            }
            if (i == 1) {
                img.setAttribute("src", url2);
                img.className = "al5_img2";
                img.style.width = getStyle(Odiv, "width") / 3 + "px";
                img.style.height = getStyle(Odiv, "width") / 3 + "px";
            }
            if (i == 2) {
                img.setAttribute("src", url3);
                img.className = "al5_img3";
                img.style.width = getStyle(Odiv, "width") / 3 + "px";
                img.style.height = getStyle(Odiv, "height") - (getStyle(Odiv, "width") / 3) + "px";
            }
            if (i == 3) {
                img.setAttribute("src", url4);
                img.className = "al5_img4";
                img.style.width = getStyle(Odiv, "width") / 3 + "px";
                img.style.height = getStyle(Odiv, "height") / 3 + "px";
                img.style.left = getStyle(Odiv, "width") / 3 + "px";
            }
            if (i == 4) {
                img.setAttribute("src", url5);
                img.className = "al5_img5";
                img.style.width = getStyle(Odiv, "width") / 3 + "px";
                img.style.height = getStyle(Odiv, "height") / 3 + "px";
            }

            Odiv.appendChild(img);

        }
    }
    if(picnumber==6){
        for(var i=0;i<picnumber;i++){
            img=document.createElement("img");
            if(i==0){
                img.setAttribute("src",url1);
                img.className="al6_img1";
                img.style.width=2*getStyle(Odiv,"width")/3+"px";
                img.style.height=2*getStyle(Odiv,"height")/3+"px";
            }
            if(i==1){
                img.setAttribute("src",url2);
                img.className="al6_img2";
                img.style.width=getStyle(Odiv,"width")/3+"px";
                img.style.height=getStyle(Odiv,"height")/3+"px";
            }
            if(i==2){
                img.setAttribute("src",url3);
                img.className="al6_img3";
                img.style.width=getStyle(Odiv,"width")/3+"px";
                img.style.height=getStyle(Odiv,"height")/3+"px";
                img.style.top=getStyle(Odiv,"height")/3+"px";
            }
            if(i==3){
                img.setAttribute("src",url4);
                img.className="al6_img4";
                img.style.width=getStyle(Odiv,"width")/3+"px";
                img.style.height=getStyle(Odiv,"height")/3+"px";
            }
            if(i==4){
                img.setAttribute("src",url5);
                img.className="al6_img5";
                img.style.width=getStyle(Odiv,"width")/3+"px";
                img.style.height=getStyle(Odiv,"height")/3+"px";
                img.style.left=getStyle(Odiv,"width")/3+"px";
            }
            if(i==5){
                img.setAttribute("src",url6);
                img.className="al6_img6";
                img.style.width=getStyle(Odiv,"width")/3+"px";
                img.style.height=getStyle(Odiv,"height")/3+"px";
            }
            Odiv.appendChild(img);
        }

    }


}



