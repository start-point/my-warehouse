class Overall {
    constructor() {
        // details.html的获取
        // 加入购物车按钮
        this.btnsub = document.querySelector('.btnsub button')
        console.log(this.btnsub)

        // 购物袋增加
        this.acount = document.querySelector('.acount')
        this.blockbtn = document.querySelector('.block-none button')
        this.blockNone = document.querySelector('.block-none')
            // 获取物品的名称和金额
        this.thename = document.querySelector('.the-name h1')
        this.thep = document.querySelector('.the-name p')
            // 获取图片
        this.shapplis = document.querySelectorAll('.shapping-left ul li')
            // 获取编号
        this.SerialNumber = document.querySelector('.Serial-number p span:nth-child(2)')
            // shapping.html的获取
        this.index = 0
        this.src = ''
        this.onthe()
    }

    // 点击购物车 右上角的购物袋加一 
    onthe() {
        this.btnsub.onclick = this.ontheclick()
        this.acount.onclick = this.goclick()
        this.blockbtn.onclick = this.goclick()

    }

    // 用数据库存数据

    // 将商品数据存到数据库上
    ontheclick() {
        // 有个渐变的小问题 不好看
        return () => {
            $('.block-none').css('z-index', '999')
            $('.block-none').animate({
                opacity: 1,
            })
            setTimeout(() => {
                $('.block-none').animate({
                    opacity: 0,
                })
                $('.block-none').css('z-index', '-1')
            }, 3000)
            this.index += 1
            for (let i = 0; i < this.shapplis.length; i++) {
                this.src = this.shapplis[i].children[0].children[0]
                if (this.shapplis[i].className == 'active') {
                    let index = this.index
                    $.cookie('src', this.src.src)
                    $.cookie('acount', index)
                    $.cookie('thename', this.thename.innerText)
                    $.cookie('number', this.SerialNumber.innerText)
                }
            }
        }
    }

    goclick() {
        return () => {
            location.href = "http://localhost/src/shopping.html";
        }
    }


}


class Shapping {
    constructor() {
        this.mainBlock = document.querySelector('.main-block-left')
        this._return = document.querySelector('.return')
        this.mainNone = document.querySelector('.main-none-left')
        this.pspan = document.querySelector('.main-none-left>p span')
        this.uis = document.querySelectorAll('.main-none-left ul')
        this.countspan = document.querySelector('.count p:nth-child(2) span')
            // 商品图片
        this.ShoppingGoods = document.querySelector('.Shopping-goods')
            // 商品名字
        this.Shoppingp = document.querySelector('.Shopping-introduce p:nth-child(1)')
            // 编号
        this.Shoppingspan = document.querySelector('.Shopping-introduce p:nth-child(4) span:nth-child(2)')
            // 数量
        this.commodity1 = document.querySelector('.commodity div span:nth-child(1)')
        this.commodity2 = document.querySelector('.commodity div span:nth-child(2)')
        this.commodity3 = document.querySelector('.commodity div span:nth-child(3)')
            //钱
        this.money = document.querySelector('.shapping-money p span')
        this.icuparent = document.querySelector('.icuparent')
        console.log(this)
        this.mainC()
        this.seAjax()
        this.icuclick()
        this.ontheonclick()
    }

    ontheonclick() {
            this._return.onclick = this.go()
            this.commodity1.onclick = this.index1()
            this.commodity3.onclick = this.index2()
        }
        // 点击出现
    mainC() {
        if (typeof($.cookie("acount")) == 'object') {
            return false
        }
        this.mainBlock.style.display = 'none'
        this.mainNone.style.display = 'block'
        this.ShoppingGoods.innerHTML = `<img src="${$.cookie("src")}" alt="">`
        this.Shoppingp.innerHTML = $.cookie("thename")
        this.Shoppingspan.innerHTML = $.cookie("number")
        this.commodity2.innerHTML = $.cookie("acount")
        this.pspan.innerHTML = this.uis.length

    }

    // 发送ajax
    seAjax() {
        let num = $.cookie("number")
        $.post("http://localhost/src/php/money.php", {
                number: num,
            },
            res => {
                this.money.innerHTML = res * this.commodity2.innerHTML
                this.countspan.innerHTML = this.money.innerHTML
            },
            "text"
        )
    }

    go() {
        return () => {
            window.history.go(-1)
        }
    }
    index1() {
        return () => {
            this.commodity2.innerHTML--
                if (parseInt(this.commodity2.innerHTML) <= 1) {
                    this.commodity2.innerHTML = 1
                }
            this.seAjax()
        }
    }
    index2() {
        return () => {
            this.commodity2.innerHTML++
                this.seAjax()
        }
    }

    icuclick() {
        let chang = this.uis.length - 0
        this.icuparent.onclick = evt => {
            let e = evt || window.event
            let target = e.target || e.srcElement
            if (target.className == 'icu') {
                target.parentElement.remove()
                chang--
                if (chang == 0) {
                    this.mainBlock.style.display = 'block'
                    this.mainNone.style.display = 'none'
                    $.cookie('src', null)
                    $.cookie('acount', null)
                    $.cookie('number', null)
                    $.cookie('thename', null)
                    this.mainNone.style.display = 'none'
                }
            }
        }
    }
}