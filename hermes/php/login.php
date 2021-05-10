<?php
header("content-type:text/html;charset=utf8");
$account = $_POST['account'];
$password = $_POST['password'];
$con = mysqli_connect('localhost','root','root','content');
mysqli_query($con,"set names utf8");
$row = mysqli_query($con,"select * from hermes where account='$account' and password='$password'");
$res = mysqli_fetch_assoc($row);
if($res){
    echo json_encode([
        "meta" => [
            "status"=>1,
            "message"=>"登录成功"
        ],
        "date" =>$res["name"]
    ]);
}else{
    echo json_encode([
        "meta" => [
            "status"=>0,
            "message"=>"登陆失败"
        ]
    ]);
}
