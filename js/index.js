//发布blog功能
$(function(){
  $('textarea').on('input',function(){
    let textareaLength=$.trim($('textarea').val().length);
    if(textareaLength>0){
      $(".input .rt li:last-child").css("visibility","visible");
    }
    $(".input .rt li:last-child b").html(textareaLength);
  });
  $(".input .rt>div>a").on('click',function(){
    let textareaLength=$.trim($('textarea').val().length);
    if(textareaLength>0){
      console.log(1);
    }
  });
  $(".input .rt li:nth-child(2)").on("click",function(e){
    e.preventDefault();
    $('textarea').val($('textarea').val()+'##');
  });
});
