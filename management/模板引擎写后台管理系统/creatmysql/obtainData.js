// npm i mongoose -S
const mongoose = require('mongoose');
// main是库的名字
mongoose.connect('mongodb://localhost/main', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // 创建一个表的数据类型
let userSchema = mongoose.Schema({
        id: String,
        describe: String,
        imgPath: String,
        price: String,
    })
    // user 是表的名字
let ontainModel = mongoose.model('scenics', userSchema, 'scenics')

// 导出
module.exports = ontainModel;