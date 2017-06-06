
var Child= {
    props: ['src'],
    template: '<li class="yw-pics-li"> ' +
    '<div class="yw-pic-part" >' +
    ' <img   ref="img" v-bind:title="src.part1.bookName" class="yw-pic-img" :src="src.part1.href"/> ' +
    '<div class="yw-pic-conWrap"> ' +
    '<div class="yw-pic-con"> ' +
    '<h6 class="yw-pic-name">{{src.part1.bookName}}</h6> ' +
    '<p class="yw-pic-text">{{src.part1.bookResume}}</p> </div> </div> </div> ' +
    '<div class="yw-pic-part">' +
    ' <img  ref="img" v-bind:title="src.part2.bookName" class="yw-pic-img" :src="src.part2.href"/> ' +
    '<div class="yw-pic-conWrap"> ' +
    '<div class="yw-pic-con"> ' +
    '<h6 class="yw-pic-name">{{src.part2.bookName}}</h6> ' +
    '<p class="yw-pic-text">{{src.part2.bookResume}}</p> </div> </div> </div></li> '
}
new Vue({
    el: "#yw-pics-ul",
    components: {
        component: Child
    },
    data: {
        srcs:[
            {
                part1: {href:"images/nvwa.jpg",bookName:"女娲",bookResume:"女娲成长日记是一本玄幻作品"},
                part2:{href:"images/zhiqingchun.jpg",bookName:"致青春",bookResume:"青春小说"}
            },
            {
                part1:{href:"images/zetianji.jpg",bookName:"择天记",bookResume:"择天记是一本玄幻作品"},
                part2:{href:"images/daomubiji.jpg",bookName:"致青春",bookResume:"青春小说"}
            },
            {
                part1:{href:"images/shenzang.jpg",bookName:"神藏",bookResume:"神藏是一本玄幻作品"},
                part2:{href:"images/jueji.jpg",bookName:"巨爵",bookResume:"巨爵是玄幻小说"}
            },
            {
                part1:{href:"images/langyabang.jpg",bookName:"琅琊榜",bookResume:"琅琊榜是穿越小说"},
                part2:{href:"images/miyuezhuan.jpg",bookName:"芈月传",bookResume:"芈月传是宫斗小说"}
            },
            {
                part1:{href:"images/guichuideng.jpg",bookName:"鬼吹灯",bookResume:"鬼吹灯是悬疑惊悚小说"},
                part2:{href:"images/talaile.jpg",bookName:"他来了",bookResume:"他来了是恐怖小说"}
            },
            {
                part1:{href:"images/nvwa.jpg",bookName:"女娲",bookResume:"女娲成长日记是一本玄幻作品"},
                part2:{href:"images/zetianji.jpg",bookName:"择天记",bookResume:"择天记是玄幻小说"}
            },
            {
                part1: {href:"images/daomubiji.jpg",bookName:"盗墓笔记",bookResume:"盗墓笔记是一本玄幻作品"},
                part2:{href:"images/zhiqingchun.jpg",bookName:"致青春",bookResume:"致青春是青春小说"}
            },
        ]
    },
})
window.onload=function(){
    var oBrand=document.getElementById("brands");

    var oClienthei=document.documentElement.clientHeight;
    var oywImg=document.getElementsByClassName("yw-pic-img");
    var oimgsUl=document.getElementById("yw-pics-ul");
    var oimgsLi=document.getElementsByClassName("yw-pics-li");
    var oNavbar=document.getElementById("nav-bar");
    for(var i=0;i<oywImg.length;i++){
        if(oywImg[i].naturalHeight==768){
            oywImg[i].style.height="320px";
        }else{
            oywImg[i].style.height="160px";
        }
    }

    /*
     @method:imgActive
     @param{ele,ele,Number,Number} 要点击的元素，点击之后动作的元素，鼠标移入时要改变的marginLeft值，
     鼠标移出时要改变的marginLeft值
     @return[string]返回的是改变后的数值
     */
    function  imgActive(e, a_e,  mouseover_mL,mouseout_mL){
        e.onmouseover=function(){
            a_e.style.marginLeft=mouseover_mL+"px";
        }
        e.onmouseout=function(){
            a_e.style.marginLeft=mouseout_mL+"px";
        }
    }
    imgActive(oimgsLi[2],oimgsUl,-((document.documentElement.clientWidth/2)+640),-1440);
    imgActive(oimgsLi[6],oimgsUl,-1566,-1440);
    var $tags=$(".container>div");
    var brand=document.getElementById("brands");
    setInterval(function(){
        var oScrolltop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
        for(var i=1;i<$(".container>div").length;i++){
            if((($tags[i].offsetTop-oScrolltop)>0)&&($tags[i].offsetTop-oScrolltop)<74){
                for(var j=0;j<$("#nav-bar .nav-tags a").length;j++){
                    if($("#nav-bar .nav-tags a")[j].getAttribute("href")==("#"+$tags[i].getAttribute("id"))){
                        $("#nav-bar .nav-tags a")[j].style.backgroundColor="blue";
                        for(var k=0;k<$("#nav-bar .nav-tags a").length;k++) {
                            //if($("#nav-bar").getAttribute("class")=="nav-bar"){
                            $("#nav-bar .nav-tags a")[k].style.backgroundColor = "white";
                            //}else{
                            $("#nav-bar .nav-tags a")[k].style.backgroundColor = "transparent";
                            //}
                        }
                        $("#nav-bar .nav-tags a")[j].style.backgroundColor="blue";
                    }
                }
            }
            // }

        }},0)







}
new Vue({
    el:"#mobile",
    data:{
        title:"QQ阅读 海量原著 想读就读",
        text:"个性推荐，拥有你的专属书城；精致排版，感受极致阅读体验。",
        src:"images/yw-app-qq@2x.png",
        href:"http://www.yuewen.com/app.html#appqq"
    },
    methods:{
        renew:function(order){
            var oLine =this.$el.querySelector(".yw-tab-hline");
            if(order==1){
                this.title="QQ阅读 海量原著 想读就读",
                    this.text="个性推荐，拥有你的专属书城；精致排版，感受极致阅读体验。",
                    this.src="images/yw-app-qq@2x.png",
                    oLine.style.transform="translate(0px)",
                    this.href="http://www.yuewen.com/app.html#appqq"
            }else if(order==2){
                this.title="起点读书 海量小说 原创乐土",
                    this.text="看原创正版小说，追大神作家；三亿读者的选择，百万作家在此创作；热门影视、游戏 IP 发源地。",
                    this.src="images/yw-app-qd-new@2x.png",
                    oLine.style.transform="translate(100px)",
                    this.href="http://www.yuewen.com/app.html#appqd"
            }else if(order==3){
                this.title="作家助手 随时随地 全民写作",
                    this.text="随身记录乍现灵感，发布专属自己的作品，与 6 亿读者分享你的故事。",
                    this.src="images/yw-app-zj-new@2x.png",
                    oLine.style.transform="translate(200px)",
                    this.href="http://www.yuewen.com/app.html#appzj"
            }
        }
    }
})
var vm= new Vue({
    el:"#nav-bar",
    data:{
        isactive:true

    },
    methods: {
        hide:function(){
            var oScrolltop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if(oScrolltop==0){
                this.isactive=false;
            }else {
                this.isactive=true;
            }
        }
    }
})
window.onscroll=function(){
    vm.hide();

}

new Vue({
    el:"#slide-dot",
    data:{
        items:["","",""]
    }
})
new Vue({
    el:"#brands",
    data:{
        isActive:true,
        description:{
            "brand-qidian":"起点中文网创建于 2002 年 5 月，是国内引领行业的原创文学门户网站和写作平台，隶属于数字阅读综合平台——阅文集团。起点中文网前身为起点原创文学协会，长期致力于原创文学作者的挖掘与培养工作，并以推动中国文学原创事业为发展宗旨，并以此为契机开创了在线收费阅读即电子出版的新模式。",
            "brand-chuangshi":"创世中文网成立于 2013 年，是由资深网络文学团队精心打造的集阅读、创作、互动社区、版权运营于一体的全开放网络文学平台。依托阅文集团，基于团队经验和影响力以及旗下大批知名网络作家，我们将全力推进网络文学泛娱乐运营、用户阅读和互动体验、原创扶持力度的全面升级，努力将网络文学推向一个全新时代，成为网络文学强势崛起的新锐力量和行业格局的主要变革者。",
            "brand-yunqi":"云起书院是引领行业的女性文学创作基地，以打造“精品”为目标，成就无数平民作者的文学梦想。作为网络文学产业的重要细分市场，女性文学有着巨大的市场想象空间。云起书院将肩负起打造全新女性文学产业生态的重任，基于腾讯强大的资源平台和运营体系，促进中国女性文学市场的健康、持续发展，迎接“全民阅读”时代的到来。",
            "brand-hongxiu":"红袖添香创办于 1999 年，国内引领行业的女性文学数字版权运营商。 红袖添香为用户提供涵盖小说、散文、杂文、诗歌、歌词、剧本、日记等体裁的高品质创作和阅读服务，在言情、职场小说等女性文学写作及出版领域具有巨大影响力。",
            "brand-xiaoxiang":"潇湘书院一直以做中国最好的女生原创网站为目标，立志为广大的原创作者提供一个公平、公正，健康的文学发展平台。优秀的工作团队和人性化的管理模式，使潇湘书院成为女性原创作者群体以及读者群体中具备强大吸引力和归属感的原创网站。",
            "brand-qdmn":"nnn",
            "brand-readnovel":"a",
            "brand-xs8":"a",
            "brand-zubunet":"a"
        },
        class:"brand-qidian",
        attrs:[
            {class:   "brand-qidian",href:"http://www.qidian.com/"} ,
            {class: "brand-chuangshi",href:"http://chuangshi.qq.com/"},
            {class:"brand-yunqi",href:"http://yunqi.qq.com/"},
            {class:"brand-hongxiu",href:"http://www.hongxiu.com/"},
            {class:"brand-xiaoxiang",href:"http://www.xxsy.net/"},
            {class:"brand-qdmn",href:"http://www.qdmm.com/"},
            {class:"brand-readnovel",href:"http://www.readnovel.com/"},
            {class: "brand-xs8",href:"http://www.xs8.cn/"},
            {class:"brand-zubunet",href: "http://www.zubunet.com/"},
            {class:"brand-rongshuxia",href: "http://www.rongshuxia.com/"},
            {class:"brand-tingbook",href: "http://www.tingbook.com/"},
            {class:"brand-lrts",href:"http://www.lrts.me/"},
            {class:"brand-qqyuedu",href:"http://www.yuewen.com/app.html#appqq"},
            {class:"brand-qidiands",href:"http://www.yuewen.com/app.html#appqd"},
            {class:"brand-zjzs",href: "http://www.yuewen.com/app.html#appzj"},
            {class:"brand-qqyuedu",href:"http://www.yuewen.com/app.html#appqq"},
            {class:"brand-qidiands",href:"http://www.yuewen.com/app.html#appqd"},
            {class:"brand-zjzs",href: "http://www.yuewen.com/app.html#appzj"},
        ]
    },
    methods:{
        toggle:function(){
            this.class=event.currentTarget.children[0].classList[2];
        },
    },
})
new Vue({
    el:"#news",
    data:{
        items:[
            {
                title:"听阅文集团CEO吴文辉谈中国原创文学里的生意经",
                sort:"人物",
                time:"2017-2-1",
                content:"在20170515期《财智对话》上，阅文集团CEO吴文辉和德同资本合伙人陈超，一起谈中国原创文学里的生意经。听吴文辉讲述互联网时代的阅文创始团队如何做第一个吃螃蟹的人。从开启网络文学付费阅读开始，到如今打造了中国最大的正版数字阅读平台，深耕泛娱乐市场，探索IP经营之道。",
                href:"http://mp.weixin.qq.com/s/NqfrJqHeeDqkVFKIyv49bw"
            },
            {
                title:"起点国际正式上线 阅文集团助推文化一带一路",
                sort:"新闻",
                time:"2017-5-18",
                content:"5月15日，阅文集团旗下起点国际正式上线。作为中国网络文学领先门户起点中文网的海外版，起点国际旨在为海外读者提供最全面内容、最精准翻译、最高效更新及最便捷体验。起点国际正式“开门迎客”，标志着阅文集团迈入全新发展阶段，多年海外布局再迎突破性进展。自此，阅文集团率先成功打破文化走出去的“壁垒”，展中华文化魅力的同时更强力参与全球泛娱乐市场竞争，积极实践文化一带一路，进一步提升中国文创产业的全球竞争力与影响力。",
                href:"http://mp.weixin.qq.com/s/P9sps_uyrlXgiKNAaAMfgA"
            },
            {
                title:"阅文集团携起点海外站亮相深圳文博会",
                sort:"新闻",
                time:"2017-5-18",
                content:"2017年5月11日，第十三届中国(深圳)文化产业博览会（以下简称深圳文博会）在深圳会展中心拉开帷幕。作为引领行业的正版数字阅读平台和文学IP培育平台，阅文集团有幸成为2017深圳文博会上海展团成员之一。本次参展，阅文除展示移动入口旗舰产品“QQ阅读”和集团旗下优质IP外，还首度携起点海外站亮相，获得了中共中央宣传部、上海市委宣传部、上海市新闻出版局等各级领导的高度赞赏和关注。",
                href:"http://mp.weixin.qq.com/s/3nI5tRn8oKWYOYOhy5ON6g"
            },
            {
                title:"阅文集团顶级IP《近战法师》公布剧版破冰三大招：未来、功夫、青春",
                sort:"新闻",
                time:"2017-5-18",
                content:"今日，在华策集团克顿传媒举办的“2017克顿传媒爆品项目合作会”上，改编自阅文集团白金作家蝴蝶蓝的顶级游戏小说《近战法师》尤为瞩目，引起了场内各大视频网站和电视台的热切关注。会中首次对外披露了《近战法师》目前的电视剧项目筹备情况，并提出了该项目的三大优势：未来、功夫、青春。三大优势融合构成了行业中几乎无人涉及的题材，为电视剧领域开辟了新的蓝海。",
                href:"http://mp.weixin.qq.com/s/9nsBttjtQe4TH-Eia-gAJQ"
            },
        ]
    }
})
new Vue({
    el:"#contact",
    data:{
        contactItems:[
            {
                task:"出版版权合作",
                person:"高小姐",
                QQ:"378146293",
                Email:"gaobeier@yuewen.com"
            },
            {
                task:"出版版权合作",
                person:"高小姐",
                QQ:"378146293",
                Email:"gaobeier@yuewen.com"
            },
            {
                task:"出版版权合作",
                person:"高小姐",
                QQ:"378146293",
                Email:"gaobeier@yuewen.com"
            },
            {
                task:"出版版权合作",
                person:"高小姐",
                QQ:"378146293",
                Email:"gaobeier@yuewen.com"
            },


        ]
    }
})
new Vue({
    el:"#footer",
    data:{
        year:2016
    },
    mounted: function(){
        var oDate=new Date;
        this.year=oDate.getFullYear()
    }
})
function autoply(){
    var i=1;
    $(".slide-dot span:eq(0)").css("border","3px solid white");
    $(".slide-dot span").click(function(){
        i=$(this).index()+1;
        $(".hd-slide-"+i).css("opacity",1).siblings().css("opacity",0);
        $(".slide-dot span:eq("+(i-1)+")").css("border","3px solid white").siblings().css("border","1px solid white")
    });
    setInterval(function(){
        $(".hd-slide-"+i).css("opacity",1).siblings().css("opacity",0);
        $(".slide-dot span:eq("+(i-1)+")").css("border","3px solid white").siblings().css("border","1px solid white")
        i++;
        if(i>3) {
            i = 1
        }
    },2000)

}
autoply();