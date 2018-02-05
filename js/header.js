$(
  $.get("header.html", function(data){$("#header").html(data);})
);
$(function(){
  $(".user-setting>ul>li").on("mouseover",function(){
    $(this).children("ul").show();
  });
  $(".user-setting>ul>li").on("mouseleave",function(){
    if($(this).children("ul").css("display")==="block"){
      $(this).children("ul").hide();
    }
  });
  $(".user-setting>ul>li>ul").on("mouseout",function(){
    $(this).hide();
  });
});