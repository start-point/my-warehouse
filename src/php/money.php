<?php
header("content-type:text/html;charset=utf8");
$number = $_POST['number'];
$con = mysqli_connect('localhost','root','root','content');
mysqli_query($con,"set names utf8");
$row = mysqli_query($con,"select * from goods where number='$number'");
$res = mysqli_fetch_assoc($row);
print_r($res["price"]);