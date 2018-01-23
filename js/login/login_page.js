  // 页面轮播效果
  $(function(){
    document.addEventListener("mousewheel",function(e){mainMove(e.wheelDelta);});
    $(".mainNav").on("mouseover",function(e){
      let $tar=$(e.target);
      if($tar.is("li")){
        mainMove($tar.index());
      }
    });
    $(".toBlue").on("click",()=>{mainMove(-120);});
    $(".right_button input:first-child").on("click",()=>{mainMove(0);});
    $(".right_button input:last-child").on("click",()=>{mainMove(4);});
    function mainMove(type){
      let $main=$(".main");
      let mainHeight=$main.height();
      let mainTop=$main[0].offsetTop;
      let floor;
      if(type<5&&type>-1){
        floor=-mainHeight/5*type;
      }else if(type===-120){
        floor=(mainTop===-mainHeight/5*4?-mainHeight/5*4:mainTop-mainHeight/5);
      }else if(type===120){
          floor=(mainTop===0?0:mainTop+mainHeight/5);
      }
      if(!$main.is(":animated")){
        $main.stop(true).animate({top:floor+'px'},500,()=>{
          let li=-floor*5/mainHeight;
          $(".mainNav li").eq(li).addClass("hover").siblings().removeClass("hover");
        });
      }
    }
  });