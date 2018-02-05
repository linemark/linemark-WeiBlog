<?php
  require_once("../init.php");
  @$uname=$_REQUEST["uname"];
  $sql="SELECT * FROM wb_user WHERE uname='$uname'";
  $result=mysqli_query($conn,$sql);
  $row=mysqli_fetch_assoc($result);
  if($row){
    echo json_encode(["ok"=>0,"msg"=>"该用户名已经被注册！"]);
  }else{
    echo json_encode(["ok"=>1,"msg"=>"该用户名可以使用！"]);
  }
?>