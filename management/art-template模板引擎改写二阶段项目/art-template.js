const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./model/res");

app.use(express.static("./src"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/user", router)

// 模板引擎配置
// 指定art-template模板，并指定模块后缀为.html
app.engine('html', require('express-art-template'));
// 指定模板视图路径
app.set('views', path.join(__dirname, 'src'));
// 省略指定模块文件后缀后名称
app.set('view engine', 'html');


// node 连接 mongodb 数据库
// 下载 npm i mongoose -S
const mongoose = require('mongoose');
// 连接到数据库  main是库名
mongoose.connect('mongodb://localhost/main', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// 创建Schema  定义数据的类型
const OrderSchema = mongoose.Schema({
    id: String,
    describe: String,
    imgPath: String,
    price: String,
    number: String,
    sum: String,
});

// order  后面的 order不写的话  创建的表 会在后面加上s 建议写一样的
const Order = mongoose.model('scenics', OrderSchema, 'scenics');

Order.find({}, (res, result) => {
    app.get("/list", (req, res) => {
        res.render("list.html", {
            result,
        });
    });
    app.get('/Hermes', (req, res) => {
        res.render("Hermes.html", {
            result
        })
    })
});

app.listen(3000, () => {
    console.log("server...");
});