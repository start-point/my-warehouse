class Registered {
    constructor() {
        // 用户名
        this.name = document.querySelector("[name='name']");
        // 账号
        this.account = document.querySelector(".form-asy-account")
            //     // 密码
        this.password = document.querySelector(".form-asy-pass")
            //     // 确认密码
        this.pass = document.querySelector("[name='pass']")
            // 创建用户
        this.submit = document.querySelector("[type='button']")
            // 单选框
        this.check = document.querySelector("[type='checkbox']")
            // 霸王条款的
        this.agree1 = document.querySelector(".checkbox a:nth-of-type(1)")
        this.agree2 = document.querySelector(".checkbox a:nth-of-type(2)")
            // 同意
        this.btn = document.querySelector('.btns-succ')
        this.alert = document.querySelector('.alert-t')
        this.cross = document.querySelector('.cross')
            // 显示按钮
        this.rightIN = document.querySelector('.right-in')
        this.rightON = document.querySelector('.right-on')
        this.formGroup()
        this.drawing()
        this.change()
    }

    // ajax请求和判断
    formGroup() {
        this.submit.onclick = () => {
            if (this.name.value === '') {
                // alert('请输入用户名')
                this.name.nextElementSibling.innerHTML = '请输入用户名'
                return false
            }
            if (this.account.value === '') {
                this.account.nextElementSibling.innerHTML = '请输入账号'
                return false
            }
            if (this.password.value === '') {
                this.password.nextElementSibling.innerHTML = '请输入密码'
                return false
            }
            if (this.pass.value === '') {
                this.pass.nextElementSibling.innerHTML = '请确认密码'
                return false
            }
            if (this.check.checked !== true) {
                alert('请同意霸王条款')
                return false
            }
            this.endajax()
        }
        this.agree1.onclick = () => {
            this.alert.style.display = 'block'
        }
        this.cross.onclick = () => {
            this.alert.style.display = 'none'
        }
        this.btn.onclick = () => {
            this.check.checked = true
            this.alert.style.display = 'none'
        }
        this.rightIN.onclick = () => {
            if (this.rightIN.innerText == '显示') {
                this.rightIN.nextElementSibling.type = 'text'
                this.rightIN.innerText = '隐藏'
            } else {
                this.rightIN.nextElementSibling.type = 'password'
                this.rightIN.innerText = '显示'
            }
        }
        this.rightON.onclick = () => {
            if (this.rightON.innerText == '显示') {
                this.rightON.nextElementSibling.type = 'text'
                this.rightON.innerText = '隐藏'
            } else {
                this.rightON.nextElementSibling.type = 'password'
                this.rightON.innerText = '显示'
            }
        }

    }

    // onchange事件
    change() {
        this.time;
        this.name.oninput = () => {
            clearTimeout(this.time)
            this.time = setTimeout(() => {
                let reg = /^([\\u4e00-\\u9fa5]{1,20}|[a-zA-Z\\.\\s]{1,20})$/
                if ((reg.test(this.name.value))) {
                    this.name.nextElementSibling.innerHTML = '用户名不规范'
                } else {
                    this.name.nextElementSibling.innerHTML = ''
                }
            }, 500)
        }
        this.account.oninput = () => {
            clearTimeout(this.time)
            this.time = setTimeout(() => {
                let reg = /\d/
                if (!(reg.test(this.account.value))) {
                    this.account.nextElementSibling.innerHTML = '账号不规范'
                } else {
                    this.account.nextElementSibling.innerHTML = ''
                }
            }, 500)
        }
        this.password.oninput = () => {
            clearTimeout(this.time)
            this.time = setTimeout(() => {
                let reg = /\w{6,18}/
                if (!(reg.test(this.password.value))) {
                    this.password.nextElementSibling.innerHTML = '密码不规范'
                } else {
                    this.password.nextElementSibling.innerHTML = ''
                }
            }, 500)

        }
        this.pass.oninput = () => {
            if (this.password.value != this.pass.value) {
                this.pass.nextElementSibling.innerHTML = '俩次密码不一致'
            } else {
                this.pass.nextElementSibling.innerHTML = ''
            }
        }
    }

    // ajax 请求
    endajax() {
        $.post("http://localhost/src/php/resi.php", {
                name: this.name.value,
                account: this.account.value,
                password: this.password.value,
            },
            function(res) {
                let { meta: { status, message } } = JSON.parse(res)
                if (status == 1) {
                    alert(message)
                    location.href = 'http://localhost/src/login.html'
                } else if (status == 0) {
                    alert(message)
                } else {
                    alert(message)
                }
            },
            "text"
        )
    }

    // 渲染条款
    drawing() {
        this.alertT = document.querySelector('.alert-t-content')
        this.alertT.innerHTML = `
        序言<br>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;欢迎使用本网站www.hermes.cn（“本网站”），请仔细阅读以下适用于您使用本网站的一般使用条款以及一般销售条款（统称“法律条款”）。
        
        本网站（“本网站”）的使用受以下具有法律约束力的一般使用条款的约束（“使用条款”）。
        
        本网站的内容发布和运营都由爱马仕（上海）商贸有限公司（“爱马仕中国”）负责。爱马仕中国是一家在中国注册成立的公司，其注册办公地址为上海市南京西路1266号130室，该公司为爱马仕国际旗下子公司。爱马仕国际为爱马仕集团的母公司。
        
        访问本网站的人士（“您”或“用户”）使用本网站的行为即表示您同意与爱马仕中国，以及爱马仕集团旗下的其他公司（以下统称为“爱马仕”）达成协议，即您将遵守使用条款的规定并受其约束，此外您亦同意本网站公布的隐私政策。请见下文中的“隐私政策”。
        
        爱马仕中国将不定期对上述使用条款进行更新，并将在本网站上公布更新内容，恕不另行通知。任何更新于公布后立即生效。用户继续使用本网站即表明同意遵守最新版本的使用条款的规定，并受其约束。用户可通过点击本网站页脚上的“法律条款”超链接浏览最新版本的使用条款。如果您不同意任何更新，请立即停止使用本网站。爱马仕中国保留在任何时间对此等使用条款作出诠释的权利。
        
        本网站（“本网站”）的使用受以下具有法律约束力的一般使用条款的约束（“使用条款”）。
        
        本网站的内容发布和运营都由爱马仕（上海）商贸有限公司（“爱马仕中国”）负责。爱马仕中国是一家在中国注册成立的公司，其注册办公地址为上海市南京西路1266号130室，该公司为爱马仕国际旗下子公司。爱马仕国际为爱马仕集团的母公司。
        
        访问本网站的人士（“您”或“用户”）使用本网站的行为即表示您同意与爱马仕中国，以及爱马仕集团旗下的其他公司（以下统称为“爱马仕”）达成协议，即您将遵守使用条款的规定并受其约束，此外您亦同意本网站公布的隐私政策。请见下文中的“隐私政策”。
        
        爱马仕中国将不定期对上述使用条款进行更新，并将在本网站上公布更新内容，恕不另行通知。任何更新于公布后立即生效。用户继续使用本网站即表明同意遵守最新版本的使用条款的规定，并受其约束。用户可通过点击本网站页脚上的“法律条款”超链接浏览最新版本的使用条款。如果您不同意任何更新，请立即停止使用本网站。爱马仕中国保留在任何时间对此等使用条款作出诠释的权利。
        `
    }
}
new Registered()