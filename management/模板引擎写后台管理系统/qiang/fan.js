const getCookie = (cookies, key) => {
    let arr = cookies.split('; ')
    for (let i = 0; i < arr.length; i++) {
        let brr = arr[i].split('=')
        if (brr[0] === key) {
            return brr[1]
        }
    }
}
let checkLogin = (req, res, next) => {
    let username = null;
    let cookies = req.headers.cookie;
    // 检测是否登录
    if (cookies) {
        username = getCookie(cookies, 'username')
    }
    if (username) {
        next()
    } else {
        // 没有登录 - 且当前路由不是 /login
        if (req.url !== '/login') {
            res.render('redirect.html', {
                message: "未登录，请先去登录！",
                time: 5,
                url: "/login"
            })
        } else {
            next()
        }
    }
}

module.exports = checkLogin