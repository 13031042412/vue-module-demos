

// 链接mongoose数据库
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yang:yang@cluster0.ig2oj.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
// 创建图表
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    item: String
});
// 往数据库内存储数据
var Todo = mongoose.model('Todo', todoSchema);
// Todo({ item: 'Hello World!' }).save(function (err, data) {
//     if (err) throw err;
//     console.log('saved')
// })



// 数据解析
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false })

// var data = [
//     { item: '斗酒勿为薄，寸心贵不忘。' },
//     { item: '坐惜故人去，偏令游子伤。' },
//     { item: '离颜怨芳草，春思结垂杨。' },
//     { item: '挥手再三别，临岐空断肠。' }
// ]

module.exports = function (app) {

    // get data
    app.get('/todo', (req, res) => {
        // res.render('todo', { todos: data });
        Todo.find({}, function (err, data) {
            if (err) throw err;
            res.render('todo', { todos: data });
        })
    });


    // post data
    app.post('/todo', urlencodeParser, (req, res) => {
        // console.log(req.body)
        Todo(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);  //返回数据
        })
    });


    // delete data
    app.delete('/todo/:item', (req, res) => {
        console.log(req.params.item)
        Todo.find({ item: req.params.item }).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
        })


        // data = data.filter(function (todo) {
        //     return todo.item !== req.params.item;
        // });
        // res.json(data);
    })


}

