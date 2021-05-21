const express = require("express");
const app = express();
const session = require('express-session');
const path = require("path");
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// session 中间件
app.use(session({
    name: "sessionId",
    secret: "asdfjklasdfjklhasdf",
    maxAge: 20 * 60 * 1000
}));

// 模板引擎
app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'html')

// 托管静态资源
app.use(express.static("./public"))

// 创建路由
app.use("/", require("./router/admin"));

// 异常处理中间件
// app.use((err, req, res, next) => {
//     res.render("./template/error.html", {
//         message: err.message
//     })
// })

// 404中间件
app.use((req, res, next) => {
    res.status(404).render("./template/404.html")
})

app.listen(9999, () => {
    console.log("正在启动在...")
})