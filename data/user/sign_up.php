<?php
  header("Content-Type:application/json");
  require_once("../init.php");
  @$uname=$_REQUEST["uname"];
  @$user_name=$_REQUEST["user_name"];
  @$upwd=$_REQUEST["upwd"];
  $sql="SELECT * FROM wb_user WHERE user_name='$user_name";
  $result=mysqli_query($conn,$sql);
  if(!$result){
    exit("用户名已被占用！");
  }
  $sql="SELECT * FROM wb_user WHERE uname='uname'";
  $result=mysqli_query($conn,$sql);
  if(!$result){
    exit("昵称已被占用！");
  }
?>
//'