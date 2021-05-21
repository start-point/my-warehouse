// npm i mongoose -S
const mongoose = require('mongoose');
// main是库的名字
mongoose.connect('mongodb://localhost/main', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // 创建一个表的数据类型
let userSchema = mongoose.Schema({
        name: String,
        account: String,
        password: String,
    })
    // user 是表的名字
let userModel = mongoose.model('user', userSchema, 'user')
    // 查询用户名是否存在
function selectUser(account, handler) {
    // 这里的name名字要和上面的对应
    userModel.findOne({ account }, (err, result) => {
        if (err) {
            handler(true)
            return
        }
        if (result) {
            handler(true, result) // 查到了
            return
        }
        handler(false) // 没查到
    })
}
// 插入用户数据
function insert(data, handler) {
    userModel.insertMany(data, (err, result) => {
        if (err) {
            handler(false)
            return
        }
        handler(true)
    })
}
// 导出
module.exports = { selectUser, insert }