<?php
  header("Content-Type:application/json");
  require_once("../init.php");
  @$email=$_REQUEST["email"];
  @$uname=$_REQUEST["uname"];
  @$upwd=$_REQUEST["upwd"];
  $sql="SELECT * FROM wb_user WHERE email='$email";
  $result=mysqli_query($conn,$sql);
  $arr=mysqli_fetch_all($result,1);
  if(!$result){
    echo json_encode(["ok"=>0,"msg"=>"该邮箱已经被注册！"]);
  }else{
    echo json_encode(["ok"=>1,"msg"=>"该邮箱可以使用！"]);
    $sql="SELECT * FROM wb_user WHERE uname='uname'";
    $result=mysqli_query($conn,$sql);
    if(!$result){
      echo json_encode(["ok"=>1,"msg"=>"该用户名已经被注册！"]);
    }else{
      echo json_encode(["ok"=>1,"msg"=>"该用户名可以使用！"]);
      $sql="INSERT INTO wb_user(email,uname,upwd) VALUES($email,$uname,$upwd);";
      $result=mysqli_query($conn,$sql);
      if(!$result){
        echo json_encode(["ok"=>2,"msg"=>"网络错误，请重新检查网络！"]);
      }else{
        echo json_encode(["ok"=>2,"msg"=>"注册成功，点击确定完善信息！"]);
      }
    }
  }
?>