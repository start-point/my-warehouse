<?php

header("content-type:text/html;charset=utf8");
$name = $_POST['name'];
$account = $_POST['account'];
$password = $_POST['password'];
$con = mysqli_connect('localhost','root','root','content');
mysqli_query($con,"set names utf8");
$row = mysqli_query($con,"select * from hermes where name='$name'");
$res = mysqli_fetch_assoc($row);
if($res){
    $arr = [
        "meta" => [
            "status"=>0,
            "message"=>"用户存在了"
        ]
    ];
}else{
    $row = mysqli_query($con,"insert hermes(name,account,password) values('$name','$account','$password')");
    if($row){
        // setcookie('name',$name,time()+52000)
        $arr = [
            "meta" => [
                "status"=>1,
                "message"=>"注册成功"
            ]
        ];
    }else{
        $arr = [
            "meta" => [
                "status"=>2,
                "message"=>"注册失败"
            ]
        ];
    }
}

echo json_encode($arr);
