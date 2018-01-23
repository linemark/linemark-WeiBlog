// 功能模块一：后台管理员登录
// 1:获取登录按钮
// 2:绑定点击事件
// 3:获取用户输入用户名和密码
// 4:发送ajax请求并且获取返回数据
// 5:判断
// 6:成功跳转 product_list.html
// 7:失败    提示:"用户名或密码有误"
(()=>{
  var btn=document.getElementById("btn");
  btn.onclick=function(e){
    e.preventDefault();
    var uname=document.getElementById("uname").value,
      upwd=document.getElementById("upwd").value;
    var ureg=/^[a-z0-9]{3,8}$/i,
      preg=/^[0-9]{3,8}$/;
    if(!ureg.test(uname)){
      alert("用户名格式不正确，请检查");
      return;
    }
    if(!preg.test(upwd)){
      alert("密码格式不正确，请检查");
      return;
    }
    ajax({
      type:"post",
      url:"data/01_admin_login.php",
      data:"uname="+uname+"&upwd="+upwd,
      dataType:"json"
    }).then(data=>{
      if(data.code==-1){
        console.log(data.msg);
      }else if(data.code==1){
        alert("登陆成功！");
        location.href="product_list.html";
      }
    });
  };
})();