const express = require('express');
const router = express.Router();
const svgCaptcha = require('svg-captcha');
const cookieParser = require('cookie-parser');
const multer = require('multer')
const path = require("path");
const app = express();
const upload = multer({ dest: path.join(__dirname, "../", "public", 'img') }) // 指定上传的文件路径
    // 导入创建好的连接数据库
const userModel = require("../creatmysql/mysql");
const ontainModel = require("../creatmysql/obtainData");
// 响应登陆界面
router.get("/login", (req, res) => {
    // 设置验证码
    let captcha = svgCaptcha.create();
    // 将验证码获取到并设置到 session
    req.session.captcha = captcha.text
    res.render("../template/login.html", {
        captcha: captcha.data
    })
});

// 用户防翻墙

// 点击登录提交到这个地方
router.post("/loginData", (req, res) => {
    const { username, password, captcha } = req.body
        // 去数据库里查询 并做比较 正确就跳转 错误就弹出消息
    userModel.findOne({ username, password }).then(result => {
        // 判断输入的验证码 是否有误
        if (req.session.captcha.toLowerCase() !== captcha.toLowerCase()) {
            res.render("../template/error.html")
        }
        // result 来判断 输入的账号密码是否正确  查询不到的话 result 返回的是一个null 
        if (!result) {
            res.render("../template/error.html", {
                mseeage: "用户或者密码错误"
            });
        }
        res.cookie("username", username, { maxAge: 20 * 36000 })
        res.render("../template/redirect.html", {
            message: "登陆成功",
            time: 5,
            url: "/"
        });


    })
})


// 响应 showList  并将商品渲染进去
router.get("/showList", (req, res) => {
    ontainModel.find({}).then(result => {
        res.render("../template/showList.html", {
            result
        })
    })

})

// 响应商品界面 
router.get("/add", (req, res) => {
    res.render("../template/add.html");
})


// 获取商品列表的数据
router.post("/postAdd", upload.single('imgPath'), (req, res) => {
    let data = req.body;
    data.imgPath = "http://localhost:9999/img/" + req.file.filename;
    ontainModel.insertMany(data).then(result => {
        console.log(result)
    })
})

const getCookie = (cookies, key) => {
    let arr = cookies.split('; ')
    for (let i = 0; i < arr.length; i++) {
        let brr = arr[i].split('=')
        if (brr[0] === key) {
            return brr[1]
        }
    }
}

// 响应主页面
router.get("/", (req, res) => {

    // 防止 别人翻墙
    let a;
    let cookie = req.headers.cookie
    if (cookie) {
        a = getCookie(cookie, "username")
    }
    if (!a) {
        // 没有登录 - 且当前路由不是 /login
        if (req.url !== '/login') {
            res.render('redirect.html', {
                message: "未登录，请先去登录！",
                time: 5,
                url: "/login"
            })
        }
    }
    res.render("../template/index.html")
})

module.exports = router;