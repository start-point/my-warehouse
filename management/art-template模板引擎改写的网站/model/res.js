const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { selectUser, insert } = require("../fz/fzfun");
const cookieParser = require("cookie-parser");
router.use(bodyParser.urlencoded({ extended: false }));

// 登录注册
router.post("/postOne", (req, res) => {
    let { name, account, password } = req.body;
    selectUser(account, bool => {
        if (bool) {
            res.json({
                meta: {
                    status: 0,
                    message: "用户已经注册"
                },
                data: null
            })
        } else {
            insert(req.body, bool => {
                if (bool) {
                    res.json({
                        meta: {
                            status: 1,
                            message: "注册成功"
                        },
                        data: null
                    })
                } else {
                    res.json({
                        meta: {
                            status: 2,
                            message: "注册失败"
                        },
                        data: null
                    })
                }
            })
        }
    })
})

router.post("/postTwo", (req, res) => {
    let { account, password } = req.body;
    selectUser(account, (bool, result) => {
        if (bool) {
            if (result.password == password) {
                res.cookie("setname", account, {
                    maxAge: 20 * 36000000
                })
                res.json({
                    meta: {
                        status: 1,
                        message: "登陆成功"
                    },
                    data: null
                })
            } else {
                res.json({
                    meta: {
                        status: 2,
                        message: "用户名或密码错误"
                    },
                    data: null
                })
            }
        } else {
            res.json({
                meta: {
                    status: 0,
                    message: "用户名不存在"
                },
                data: null
            })
        }
    })
})

module.exports = router;