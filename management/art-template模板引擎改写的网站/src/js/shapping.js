class Tab {
    constructor() {
        this.shappingLeft = document.querySelector('.shapping-left ul')
        this.lis = document.querySelectorAll('.shapping-left ul li')
        this.shappingCenter = document.querySelector('.shapping-center ul')
        this.biglis = document.querySelectorAll('.shapping-center ul li')
        this.bigContent = document.querySelector('.bigContent ul li')
        this.maskon = document.querySelector('.bigContent')
        this.maskonImg = document.querySelector('.bigContent ul li img')
        this.masktw = document.querySelector('#mask')
        this.index = 0
        this.bindEvent()
        this.mouse()
    }

    // tab 切换
    bindEvent() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].onclick = function(index) {
                this.index = index
                this.change()
            }.bind(this, i)
        }
    }

    change() {
        for (var j = 0; j < this.biglis.length; j++) {
            this.lis[j].className = this.biglis[j].className = ' '
        }
        this.lis[this.index].className = 'active'
        this.biglis[this.index].className = 'hover'
        this.maskon.children[0].children[0].children[0].src = this.shappingLeft.children[this.index].children[0].children[0].src
    }

    // 移入移出效果
    mouse() {
        this.shappingCenter.parentElement.onmouseover = () => {
            this.maskon.style.display = 'block'
            this.masktw.style.display = 'block'
            this.shappingCenter.parentElement.onmousemove = evt => {
                let e = evt || window.event
                let x = e.pageX
                let y = e.pageY
                let left = x - this.shappingCenter.parentElement.offsetLeft - this.masktw.offsetWidth / 2
                let top = y - this.shappingCenter.parentElement.offsetTop - this.masktw.offsetHeight / 2
                if (left <= 0) {
                    left = 0
                }
                if (top <= 0) {
                    top = 0
                }
                if (left >= this.shappingCenter.parentElement.offsetWidth - this.masktw.offsetWidth) {
                    left = this.shappingCenter.parentElement.offsetWidth - this.masktw.offsetWidth
                }
                if (top >= this.shappingCenter.parentElement.offsetHeight - this.masktw.offsetHeight) {
                    top = this.shappingCenter.parentElement.offsetHeight - this.masktw.offsetHeight
                }
                this.masktw.style.left = left + 'px'
                this.masktw.style.top = top + 'px'
                this.maskonImg.style.left = -left / this.shappingCenter.parentElement.offsetWidth * this.maskonImg.offsetWidth + 'px'
                this.maskonImg.style.top = -top / this.shappingCenter.parentElement.offsetHeight * this.maskonImg.offsetHeight + 'px'
            }

        }
        this.shappingCenter.parentElement.onmouseout = () => {
            this.maskon.style.display = 'none'
            this.masktw.style.display = 'none'
        }
    }

}
new Tab()