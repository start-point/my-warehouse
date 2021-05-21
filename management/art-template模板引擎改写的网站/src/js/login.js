class Login {
    constructor() {
        // 账号
        this.account = document.querySelector(".form-item-name")
            // 密码
        this.password = document.querySelector(".form-item-pass")
            // 创建用户
        this.submit = document.querySelector(".btn-inp")
            // 显示按钮
        this.rightIN = document.querySelector('.right-in')
        this.formGroup()
        this.change()
    }
    formGroup() {
        this.submit.onclick = () => {
            if (this.account.value === '') {
                this.account.nextElementSibling.innerHTML = '请输入账号'
                return false
            }
            if (this.password.value === '') {
                this.password.nextElementSibling.innerHTML = '请输入密码'
                return false
            }
            this.endajax()
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
    }

    // onchange事件
    change() {
        this.time;
        this.account.oninput = () => {
            if (this.account.value == '') {
                this.account.nextElementSibling.innerHTML = '请输入账号'
            } else {
                this.account.nextElementSibling.innerHTML = ''
            }
        }
        this.password.oninput = () => {
            if (this.password.value == '') {
                this.password.nextElementSibling.innerHTML = '请输入密码'
            } else {
                this.password.nextElementSibling.innerHTML = ''
            }
        }
    }

    // ajax 请求
    endajax() {
        $.post("/user/postTwo", {
                account: this.account.value,
                password: this.password.value,
            },
            function(res) {
                let { meta: { status, message } } = JSON.parse(res)
                if (status == 1) {
                    alert(message)
                    location.href = 'http://localhost:3000/Hermes'
                } else {
                    alert(message)
                }
            },
            "text"
        )
    }

}


document.querySelector('.gouwu').onclick = () => {
    location.href = 'http://localhost:3000/shopping.html'
}