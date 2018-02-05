<?php
  require_once("../init.php");
  @$email=$_REQUEST["email"];
  @$uname=$_REQUEST["uname"];
  @$upwd=$_REQUEST["upwd"];
  $date_time=time();
	if($email&&$uname&&$upwd){
		$sql="INSERT INTO wb_user(email,uname,upwd,date_time) VALUES('$email','$uname','$upwd','$date_time');";
		$result=mysqli_query($conn,$sql);
		if($result){
			echo json_encode(["ok"=>0,"msg"=>"注册成功，点击确定完善信息！"]);
		}else{
			echo json_encode(["ok"=>1,"msg"=>"网络错误，请重新检查网络！"]);
		}
	}
?>