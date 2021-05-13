let count = 0
let arr = []
let brr = []
let ap = []
$('.btnsub button').click(function() {
    count++
    // 设置显示出的前往商品的div
    if (count > 1) {
        layer.tips('你已经添加一次了哦,前往购物袋查看吧,亲!!!', $(this));
        return false
    }
    count = 1
    var index = layer.load(14, {
        shade: [0.4, '#fff'] //0.1透明度的白色背景
    });
    $.get('http://localhost/src/php/gouwu.php', { number: $('.Serial-number p span:nth-child(2)').text() }, res => {
            let { data } = res
            $('.block-none').css('display', 'block')
            setTimeout(function() {
                $('.block-none').css('display', 'none')
            }, 2000)
            layer.close(index)

            if (localStorage.getItem('ap')) {
                localStorage.getItem('ap')
                let app = new Array(JSON.parse(localStorage.getItem('ap')))
                app.push(data[0].id)
                app = app.flat(Infinity)
                console.log(data[0].id)
                localStorage.setItem('ap', JSON.stringify(app))

            } else {
                localStorage.setItem('ap', JSON.stringify(new Array(data[0].id)))
            }


            if (localStorage.getItem('number')) {
                let arryy = JSON.parse(localStorage.getItem('number'))
                arryy.push(data)
                localStorage.setItem('number', JSON.stringify(arryy))
            } else {
                localStorage.setItem('number', JSON.stringify(data))
            }

        },
        "json",
    )
})