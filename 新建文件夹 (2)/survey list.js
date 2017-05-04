/**
 * Created by lenovo on 2017/4/30.
 */
var oire=document.getElementById("newnire");
oire.onclick=function(){
    sessionStorage.setItem("editJuge",false);
};

var oTbody = document.getElementsByTagName("tbody")[0];
var number = sessionStorage.getItem("number");
var oldValue=sessionStorage.getItem("oldValue");
for (var i = 0; i < Number(number) + 1; i++) {
    var oTr = document.createElement("tr");
    for (var j = 0; j < 4; j++) {
        var oTd = document.createElement("td");
        oTr.appendChild(oTd);
    }
    oTr.getElementsByTagName("td")[0].innerHTML = "<input type='checkbox'>  " + sessionStorage.getItem("title" + i);
    oTr.getElementsByTagName("td")[3].innerHTML = "<span><a href='add.html'>编辑  </a></span><span><a>删除  </a></span><span><a>查看状态   </a></span><span><a href='listPage.html'>填写问卷</a></span>";
    oTr.getElementsByTagName("td")[1].innerHTML = "<span>" + sessionStorage.getItem("date" + i) + "</span>";
    var ODate = sessionStorage.getItem("date" + i);
    var splitDate = ODate.split("-");
    var endYear = Number(splitDate[0]);
    var endMonth = Number(splitDate[1]);
    var endDay = Number(splitDate[2]);
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var bJudge = false;
    if (endYear > year) {
        bJudge = true;
    } else if (endYear == year) {
        if (endMonth > month) {
            bJudge = true;
        } else if (endMonth == month) {
            if (endDay > day) {
                bJudge = true;
            }
        }
    }

    if(sessionStorage.getItem("saveJuge")=="false") {
        if (bJudge) {
            oTr.getElementsByTagName("td")[2].innerHTML = "<span>已发布</span>";
            bJudge = false;
        } else {
            oTr.getElementsByTagName("td")[2].innerHTML = "<span>问卷截止</span>";
            var removelink = oTr.getElementsByTagName("td")[3].getElementsByTagName("span")[3];
            removelink.getElementsByTagName("a")[0].setAttribute("href", "");
            removelink.getElementsByTagName("a")[0].style.display = "none";
        }
    }else{
        //这里要优化
        oTr.getElementsByTagName("td")[2].innerHTML = "<span>待发布</span>";
        var removelink = oTr.getElementsByTagName("td")[3].getElementsByTagName("span")[3];
        removelink.getElementsByTagName("a")[0].setAttribute("href", "");
        removelink.getElementsByTagName("a")[0].style.display = "none";
    }

    oTbody.appendChild(oTr);
    sessionStorage.setItem("editNum", i);
    oTr.getElementsByTagName("td")[3].getElementsByTagName("span")[0].onclick = function () {
        sessionStorage.setItem("editJuge", true);
    };
    oTr.getElementsByTagName("td")[3].getElementsByTagName("span")[1].onclick = function () {
        var tr=document.getElementsByTagName("tr");
        for(let i=0;i<tr.length;i++){
            tr[i].index=i;

        }
        var parents = this.parentNode.parentNode;
        parents.parentNode.removeChild(parents);
    };
    oTr.getElementsByTagName("td")[3].getElementsByTagName("span")[3].onclick = function () {
        sessionStorage.setItem("clickIndex", i);
    }
}