<?php
  require_once("../init.php");
  @$uname=$_REQUEST["uname"];
  @$upwd=$_REQUEST["upwd"];
  $sql="SELECT * FROM wb_user WHERE uname='$uname' and upwd='$upwd'";
  $result=mysqli_query($conn,$sql);
  $row=mysqli_fetch_assoc($result);
  if($row){
    session_start();
    $_SESSION["uid"]=$row['uid'];
    $_SESSION["uname"]=$row['uname'];
    echo json_encode(["ok"=>0,"msg"=>"登录成功！"]);
  }else{
    echo json_encode(["ok"=>1,"msg"=>"用户名或密码错误！"]);
  }
?>