//滚动条到页面底部加载更多案例
//$(window).scroll(function(){
//    var scrollTop = $(this).scrollTop();    //滚动条距离顶部的高度
//    var scrollHeight = $(document).height();   //当前页面的总高度
//    var clientHeight = $(this).height();    //当前可视的页面高度
//    // console.log("top:"+scrollTop+",doc:"+scrollHeight+",client:"+clientHeight);
//    if(scrollTop + clientHeight >= scrollHeight){   //距离顶部+当前高度 >=文档总高度 即代表滑动到底部 count++;         //每次滑动count加1
//        filterData(serviceTypeId,industryId,cityId,count); //调用筛选方法，count为当前分页数
//    }else if(scrollTop<=0){
//        //滚动条距离顶部的高度小于等于0 TODO
//        //alert("下拉刷新，要在这调用啥方法？");
//    }
//});
