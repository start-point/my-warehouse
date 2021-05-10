// 吸顶效果
window.onscroll = function() {
    let sum = document.body.scrollTop || document.documentElement.scrollTop;
    if (sum >= 50) {
        // 设置他的样式 达到过度效果
        $('#header').css({
            position: 'fixed',
            top: '-40px',
            left: 0,
            right: 0,
            bottom: 0,
            margin: '0 auto',
            boxShadow: '0 8px 16px rgb(217 207 196 / 15%)',
        })
    } else {
        $('#header').css({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: '0 auto',
            boxShadow: '0 0 0',
        })
    }
}