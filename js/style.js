$(".bk").tap(function(){
    window.history.go(-1);
}) 
// 滚动到页面底部时，自动加载更多
window.addEventListener("scroll",function scrollHandler(){              
    var scrollh = $(document).height();
    var bua = navigator.userAgent.toLowerCase();
    if(bua.indexOf('iphone') != -1 || bua.indexOf('ios') != -1){
        scrollh = scrollh-60;
    }else{
        scrollh = scrollh;
    }
    var scrollTop=Math.max(document.documentElement.scrollTop||document.body.scrollTop);
    if((scrollTop + $(window).height()) >= scrollh){
        $(".onload").show();
        var interval = setTimeout(function(){
            $(".onload").hide();
        },1000);
        var inter = setTimeout(function(){            
                $(".a-container a").children().clone().appendTo($(".coop"));
        },1000); 
    }
},100);