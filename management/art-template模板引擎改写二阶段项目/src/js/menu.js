let username = $('.username-block')
$('.login-registered>a p').click(function() {
    $('.menu-btn-say').parent().parent().animate({
        width: 500,
    }, 'linear')
})
$('.menu-btn-say').click(function() {
    $('.menu-btn-say').parent().parent().animate({
        width: 0,
    }, 'linear')
})
$('.menu-btn-login').click(function() {
    $.post("/user/postTwo", {
            account: ($('#menu .menu-content [name="account"]').val()),
            password: ($('#menu .menu-content [name="password"]').val()),
        },
        function(res) {
            let { meta: { status, message }, date } = JSON.parse(res)
            if (status == 1) {
                // $.cookie("setname", date)
                username.css("display", "block")
                $('.username-block button span a p').html(date)
                $('.username-block span a p').text(date)
                    // alert(message)
                layer.alert(message, {
                    icon: 1,
                    skin: 'layer-ext-demo'
                })
                $('.menu-btn-say').parent().parent().animate({
                    width: 0,
                }, 'linear')
                $('.username-block span a p').text($.cookie("setname"))
            } else if (status == 0) {
                layer.alert(message, {
                    icon: 2,
                    skin: 'layer-ext-demo'
                })
            }
        },
        "text"
    )
})
if ($.cookie("setname") != null) {
    console.log($.cookie("setname"))
    username.css("display", "block")
    $('.username-block span a p').text($.cookie("setname"))
}
$('.username-block button').click(function() {
    if (!confirm('确定要退出该账户嘛')) {
        return false
    }
    $.removeCookie("setname")
    username.css("display", "none")
    layer.msg('再见了您嘞', { icon: 5 });
})