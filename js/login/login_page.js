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
//登录分页功能
$(function(){
  let $iBtn=$(".login_input input[type=button]");
  $iBtn.on("click",()=>{
    let lUname=$(".login_input input[type=text]").val();
    let lUpwd=$(".login_input input[type=password]").val();
    let regEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    let $tip=$(".login_input span");
    let reg = /^[a-zA-Z0-9_]{8,12}$/;
    if(regEmail.test(lUname)){
      if(reg.test(lUpwd)){
        $.post("data/user/login_email.php", $(".login_input").serialize(),
          (data) => {
            if(data.ok===1){
              $tip.html(data.msg);
            }else if(data.ok===0){
              alert(data.msg);
            }
          }
        );
      }else{
        $tip.html("用户名或密码格式不正确");
      }
    }else if(reg.test(lUname)){
      if(reg.test(lUpwd)){
        console.log($(".login_input").serialize());
        $.post("data/user/login_uname.php", $(".login_input").serialize(),
          (data) => {
            if(data.ok===1){
              $tip.html(data.msg);
            }else if(data.ok===0){
              alert(data.msg);
            }
          }
        );
      }else{
        $tip.html("用户名或密码格式不正确");
      }
    }else{
      $tip.html("用户名或密码格式不正确");
    }
  });
});
//注册分页功能
$(function(){
  let $sEmail = $(".sign_up input[name=email]");
  let $sUname = $(".sign_up input[name=uname]");
  let $sUpwd = $(".sign_up input[name=upwd]");
  let $sBtn = $(".sign_up input[type=button]");
  let $sEmailTip = $sEmail.next("span");
  let $sUnameTip = $sUname.next("span");
  let $sUpwdTip = $sUpwd.next("span");
  $sEmail.on("focus", () => {
    $sEmailTip.html("请输入正确的邮箱格式");
  });
  $sEmail.on("blur", () => {
    let reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (reg.test($sEmail.val())) {
      $.post("data/user/check_email.php", $sEmail.serialize(),
        (data) => {
          $sEmailTip.html(data.msg);
        });
    } else {
      $sEmailTip.html("邮箱格式不正确！");
    }
  });
  $sUname.on("focus", () => {
    $sUnameTip.html("用户名为8-12位英文或数字");
  });
  $sUname.on("blur", () => {
    let reg = /^[a-zA-Z0-9_]{8,12}$/;
    if (reg.test($sUname.val())) {
      $.post("data/user/check_uname.php", $sUname.serialize(),
        (data) => {
          $sUnameTip.html(data.msg);
        });
    } else {
      $sUnameTip.html("用户名格式不正确！");
    }
  });
  $sUpwd.on("focus", () => {
    $sUpwdTip.html("密码为8-12位英文或数字");
  });
  $sUpwd.on("blur", () => {
    let reg = /^[a-zA-Z0-9_]{8,12}$/;
    if (!reg.test($sUpwd.val())) {
      $sUpwdTip.html("密码格式不正确！");
    }
  });
  $sBtn.on("click", () => {
    $.get("data/user/sign_up.php", $(".sign_up_input").serialize(),
      (data) => {
        alert(data.msg);
        if(data.ok===0){
          console.log(1);
        }
      });
  });
});