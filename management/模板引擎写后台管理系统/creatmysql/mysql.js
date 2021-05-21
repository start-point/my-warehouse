 // npm i mongoose -S
 const mongoose = require('mongoose');
 // main是库的名字
 mongoose.connect('mongodb://localhost/main', {
         useNewUrlParser: true,
         useUnifiedTopology: true
     })
     // 创建一个表的数据类型
 let userSchema = mongoose.Schema({
         username: String,
         password: Number,
     })
     // user 是表的名字
 let userModel = mongoose.model('admin', userSchema, 'admin')
     // 导出
 module.exports = userModel;