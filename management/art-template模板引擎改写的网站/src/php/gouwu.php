<?php
header("content-type:text/html;charset=utf8");
$number = $_GET['number'];
$con = mysqli_connect('localhost','root','root','content');
mysqli_query($con,'set names utf8');
$res = mysqli_query($con,"select * from scenics where id in ($number)");
$arr = [];
while($row = mysqli_fetch_assoc($res)){
    $arr[] = $row;
}

if(count($arr)>0){
    echo json_encode([
        "meta"=>[
            "status"=>0,
            "msg"=>"数据获取成功"
        ],
        "data"=>$arr
    ]);
}else{
    echo json_encode([
        "meta"=>[
            "status"=>1,
            "msg"=>"数据获取失败"
        ],
        "data"=>null
    ]);
}