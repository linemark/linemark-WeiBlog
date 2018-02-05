<?php
  require_once("../init.php");
  @$email=$_REQUEST["email"];
  $sql="SELECT * FROM wb_user WHERE email='$email'";
  $result=mysqli_query($conn,$sql);
  $row=mysqli_fetch_assoc($result);
  if($row){
    echo json_encode(["ok"=>0,"msg"=>"该邮箱已经被注册！"]);
  }else{
    echo json_encode(["ok"=>1,"msg"=>"该邮箱可以使用！"]);
  }
?>