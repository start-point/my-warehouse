// document.onscroll = function() {
//     let sum = document.body.scrollTop || document.documentElement.scrollTop;
//     console.log(sum)
//     $('.Classification').css({
//         top: getRandom(80, 180),
//     })
//     $('.Classification').attr('top', getRandom(80, 250) + 'px')
//     if (sum > 300) {
//         $('.Classification').stop().animate({
//             top: 0,
//         }, "ease")
//     }


// }


// function getRandom(a, b) {
//     var max = a;
//     var min = b;
//     if (min > max) {
//         max = b;
//         min = a;
//     }
//     return Math.floor(Math.random() * (max - min)) + min
// }
// let ps = $('#Time-style .the-article p')
// let ps1 = $('.tran p')
// let ps3 = $('.block-push .push-merch-col-products a img')
// let imgp = $('.block-push .push-merch-col-products a p')
// let dongh = $('.donngh p')
// $('.gouwu').click = () => {
//     location.href = 'http://localhost/src/shopping.html'
// }
// document.onscroll = function() {
//     var sum = document.body.scrollTop || document.documentElement.scrollTop;
//     for (let i = 0; i < divs.length; i++) {
//         setStyle(divs[i], {
//             top: getRandom(400, 700) + "px",
//         })
//         if (sum >= 300) {
//             setStyle(divs[i], {
//                 top: 0,
//             })
//         }
//     }
//     for (let j = 0; j < ps.length; j++) {
//         setStyle(ps[j], {
//             top: getRandom(1300, 1500) + "px",
//         })
//         if (sum >= 1300) {
//             setStyle(ps[j], {
//                 top: "0",
//             })
//         }
//         setStyle(ps1[j], {
//             top: getRandom(2500, 2700) + "px",
//         })
//         if (sum >= 2400) {
//             setStyle(ps1[j], {
//                 top: "0",
//             })
//         }
//     }

//     setStyle($('.imgs')[0], {
//         top: getRandom(2500, 2800) + "px",
//     })
//     if (sum >= 2400) {
//         setStyle($('.imgs')[0], {
//             top: "0",
//         })
//     }

//     for (let k = 0; k < ps3.length; k++) {
//         setStyle(ps3[k], {
//             top: getRandom(2500, 2900) + "px",
//         })
//         if (sum >= 2400) {
//             setStyle(ps3[k], {
//                 top: "0",
//             })
//         }
//     }
//     for (let f = 0; f < imgp.length; f++) {
//         setStyle(imgp[f], {
//             top: getRandom(2500, 2900) + "px",
//         })
//         if (sum >= 2400) {
//             setStyle(imgp[f], {
//                 top: "0",
//             })
//         }
//     }
//     for (let g = 0; g < dongh.length; g++) {
//         setStyle(dongh[g], {
//             top: getRandom(3400, 3650) + "px",
//         })
//         if (sum >= 3300) {
//             setStyle(dongh[g], {
//                 top: "0",
//             })
//         }
//     }

//     setStyle(document.querySelector('.lazyloaded img'), {
//         top: getRandom(1500, 1800) + "px",
//     })
//     if (sum >= 1400) {
//         setStyle(document.querySelector('.lazyloaded img'), {
//             top: "0",
//         })
//     }
//     setStyle(document.querySelector('.imgs1 img'), {
//         top: getRandom(3400, 3700) + "px",
//     })
//     if (sum >= 3300) {
//         setStyle(document.querySelector('.imgs1 img'), {
//             top: "0",
//         })
//     }
// }

// function getRandom(a, b) {
//     var max = a;
//     var min = b;
//     if (min > max) {
//         max = b;
//         min = a;
//     }
//     return Math.floor(Math.random() * (max - min)) + min
// }

// function setStyle(ele, styleObj) {
//     for (var attr in styleObj) {
//         ele.style[attr] = styleObj[attr];
//     }
// }