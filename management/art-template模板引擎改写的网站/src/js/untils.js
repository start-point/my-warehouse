/*
 * cyl
 * 2021/3/21
 * 2021/4/26 
 */

(function() {
    class Untils {
        constructor() {
            if (window.getComputedStyle) {
                this.onOff = true;
            } else {
                this.onOff = false;
            }
        }

        // 获取元素样式
        getStyle(ele, attr) {
            if (this.onOff) {
                return window.getComputedStyle(ele)[attr];
            } else {
                return ele.currentStyle[attr];
            }
        }

        // 给元素设置样式
        setStyle(ele, styleObj) {
            for (var attr in styleObj) {
                ele.style[attr] = styleObj[attr];
            }
        }

        // 生成一个范围内的随机数
        getRandom(a, b) {
            var max = a;
            var min = b;
            if (min > max) {
                max = b;
                min = a;
            }
            return Math.floor(Math.random() * (max - min)) + min
        }


        // rgb随机颜色
        /**
         * @param {true || false} apl 
         * @returns 
         */
        randomColor(apl) {
            if (apl) {
                return `rgba(${this.getRandom(0,255)},${this.getRandom(0,255)},${this.getRandom(0,255)},${this.getRandom(0,1)})`;
            }
            return `rgb(${this.getRandom(0,255)},${this.getRandom(0,255)},${this.getRandom(0,255)})`;
        }

        // 随即色16进制
        SrandomColor() {
            var randowColor = "#"
            var num = 0
            for (var i = 1; i <= 6; i++) {
                randowColor += parseInt(Math.random() * 16).toString(16)
            }
            return randowColor
        }

        // 数组去重复
        noprepeat(arr) {
            var newArr = [arr[0]];
            for (var i = 1; i < arr.length; i++) {
                var onOff = true;
                for (var j = 0; j < newArr.length; j++) {
                    if (newArr[j] == arr[i]) {
                        onOff = false;
                        break;
                    }
                }
                if (onOff) {
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        }

        /**
         *事件委托的封装
         * @param {dom是获取到的元素} dom 
         * @param {type是执行事件的类型} type 
         * @param {selector 需要触发的元素 可以是子标签 也可以是标签里面的类名} selector 
         * @param {callback 是执行的回调函数 } callback 
         * @returns 例：
         * var ul = document.querySelector('ul')
         * 这个是跟下面对比
         * on(dom, type, selector, callback)
         * on(ul, 'click', 'li', function() {
         *      console.log(ul)
         *   }) 
         */
        on(dom, type, selector, callback) {
            if (arguments.length === 4) {
                // 事件委托
                dom.addEventListener(type, function(evt) {
                    var eles = dom.querySelectorAll(selector)
                    if (eles) {
                        eles = [].slice.call(eles)
                    } else {
                        return false
                    }
                    var e = evt || window.event
                    var target = e.target || e.srcElement
                    while (target !== dom) {
                        if (eles.indexOf(target) !== -1) {
                            callback()
                            break
                        }
                        target = target.parentNode
                    }
                })
                return false
            }
            callback = selector
            dom.addEventListener(type, callback)
        }

        /**
         * 动画封装ele是需要运动的
         * obj是运动的对象
         * 例：
         * wrap.onclick = function() {
                animate(wrap, {
                    left: 500,
                    top: 200,
                    width: 300
                })
            }
        */
        animate(ele, obj, fn = () => {}) {
            let k = 0
            let n = 0
            for (let attr in obj) {
                k++
                let timerId = setInterval(function() {
                    let target = obj[attr]
                    let currentStyle = getStyle(ele, attr)
                    if (attr === 'opacity') {
                        target *= 100
                        currentStyle *= 100
                    }
                    currentStyle = parseInt(currentStyle)
                    let speed = (target - currentStyle) / 15
                    if (speed > 0) {
                        speed = Math.ceil(speed)
                    } else {
                        speed = Math.floor(speed)
                    }
                    currentStyle += speed
                    if (currentStyle === target) {
                        if (attr === 'opacity') {
                            ele.style[attr] = currentStyle / 100
                        } else {
                            ele.style[attr] = currentStyle + "px"
                        }
                        currentStyle = target
                        clearInterval(timerId)
                        n++
                        if (k === n) {
                            fn()
                        }
                    } else {
                        if (attr === 'opacity') {
                            ele.style[attr] = currentStyle / 100
                        } else {
                            ele.style[attr] = currentStyle + "px"
                        }
                    }

                }, 15)
            }

            function getStyle(ele, attr) {
                if (window.getComputedStyle) {
                    return window.getComputedStyle(ele)[attr]
                } else {
                    return ele.currentStyle[attr]
                }
            }
        }

        /**
         * @param {需要获取的cookie的键} key 
         * @returns 
         */
        getCookie(key) {
            let arr = document.cookie.split('; ')
            for (let i = 0; i < arr.length; i++) {
                let brr = arr[i].split('=')
                if (brr[0] === key) {
                    return brr[1]
                }
            }
        }

        /**
         * @param {cookie键} key 
         * @param {cookie值} value 
         * @param {cookie消失的时间} seconds 
         * @param {路径 / 是代表在localhost下都显示} path 
         */
        setCookie(key, value, second) {
            var date = new Date();
            date.setTime(date.getTime() - 8 * 3600 * 1000 + second * 1000);
            document.cookie = `${key}=${value};expires=${date};path=/`;
        }

        // 删除cookie的函数
        removeCookie(key) {
            this.setCookie(key, "", -1);
        }


        /**
         * @param {传入的是一个对象} obj 
         * @returns 
         */
        sendAjax(obj) {
            if (!obj.dataType) {
                obj.dataType = 'json'
            }
            if (obj.dataType.toLowerCase() !== 'xml' && obj.dataType !== 'json' && obj.dataType !== 'string') {
                throw new Error('dataType必须是xml或string或json')
            }
            if (!obj.method) {
                obj.method = 'get'
            }
            if (obj.method.toLowerCase() !== 'get' && obj.method.toLowerCase() !== 'post') {
                throw new Error('请求方式必须是get或post')
            }
            if (!obj.url) {
                throw new Error('地址必填')
            }
            if (typeof obj.url !== 'string') {
                throw new Error('请传入正确的地址')
            }
            if (obj.async === undefined) {
                obj.async = true
            }
            if (typeof obj.async !== 'boolean') {
                throw new Error("async参数必须是布尔值")
            }
            var str = '';
            if (obj.data) {
                if (typeof obj.data === 'object') {
                    if (obj.data) {
                        var f = '';
                        for (var attr in obj.data) {
                            str += f + attr + '=' + obj.data[attr]
                            f = '&'
                        }
                    }
                } else if (typeof obj.data === 'string') {
                    str = obj.data
                } else {
                    throw new Error('数据必须是对象或字符串')
                }
                if (obj.method.toLowerCase() === 'get') {
                    obj.url += '?' + str
                }
            }
            if (!obj.success) {
                obj.success = function() {}
            }
            if (!obj.error) {
                obj.error = function() {}
            }
            if (typeof obj.success !== 'function') {
                throw new Error("success必须是函数")
            }
            if (typeof obj.error !== 'function') {
                throw new Error("error必须是函数")
            }
            var xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (/^2\d{2}$/.test(xhr.status)) {
                        var res = '';
                        switch (obj.dataType.toLowerCase()) {
                            case 'string':
                                res = xhr.responseText;
                                break;
                            case 'json':
                                res = xhr.responseText;
                                res = JSON.parse(res)
                                break;
                            case "xml":
                                res = xhr.responseXML;
                                break;
                        }
                        obj.success(res)
                    } else {
                        obj.error()
                    }
                }
            }
            xhr.open(obj.method, obj.url, obj.async)
            if (obj.data) {
                if (obj.method.toLowerCase() === 'post') {
                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                    xhr.send(str)
                    return false;
                }
            }
            xhr.send()
        }

        promiseAjax(obj) {
            return new Promise(function(resolve, reject) {
                if (!obj.dataType) {
                    obj.dataType = 'json'
                }
                if (obj.dataType.toLowerCase() !== 'xml' && obj.dataType !== 'json' && obj.dataType !== 'string') {
                    throw new Error('dataType必须是xml或string或json')
                }
                if (!obj.method) {
                    obj.method = 'get'
                }
                if (obj.method.toLowerCase() !== 'get' && obj.method.toLowerCase() !== 'post') {
                    throw new Error('请求方式必须是get或post')
                }
                if (!obj.url) {
                    throw new Error('地址必填')
                }
                if (typeof obj.url !== 'string') {
                    throw new Error('请传入正确的地址')
                }
                if (obj.async === undefined) {
                    obj.async = true
                }
                if (typeof obj.async !== 'boolean') {
                    // 抛出自定义错误
                    throw new Error("async参数必须是布尔值")
                }
                var str = '';
                if (obj.data) {
                    if (typeof obj.data === 'object') {
                        if (obj.data) {
                            var f = '';
                            for (var attr in obj.data) {
                                str += f + attr + '=' + obj.data[attr]
                                f = '&'
                            }
                        }
                    } else if (typeof obj.data === 'string') {
                        str = obj.data
                    } else {
                        throw new Error('数据必须是对象或字符串')
                    }
                    if (obj.method.toLowerCase() === 'get') {
                        obj.url += '?' + str
                    }
                }
                var xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (/^2\d{2}$/.test(xhr.status)) {
                            var res = '';
                            switch (obj.dataType.toLowerCase()) {
                                case 'string':
                                    res = xhr.responseText;
                                    break;
                                case 'json':
                                    res = xhr.responseText;
                                    res = JSON.parse(res)
                                    break;
                                case "xml":
                                    res = xhr.responseXML;
                                    break;
                            }
                            resolve(res)
                        } else {
                            reject()
                        }
                    }
                }
                xhr.open(obj.method, obj.url, obj.async)
                if (obj.data) {
                    if (obj.method.toLowerCase() === 'post') {
                        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                        xhr.send(str)
                        return false;
                    }
                }
                xhr.send()
            })
        }

        jsonp(url, data, fnname, key, fn) {
            var script = document.createElement('script')
            url += '?';
            var f = '';
            data[key] = fnname
            for (var attr in data) {
                url += f + attr + '=' + data[attr]
                f = '&'
            }
            window[fnname] = fn
            script.setAttribute('src', url)
            document.head.appendChild(script)
            document.head.removeChild(script)
        }

    }
    var obj;
    var $ = (function() {
        if (!obj) {
            obj = new Untils();
        }
        return obj;
    })()
    window.Untils = window._ = window.$ = $;
})();