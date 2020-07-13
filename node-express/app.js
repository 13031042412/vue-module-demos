const express = require('express');
const app = express();
const port = 3001;
var todoController = require('./controller/todoController')

app.set('view engine', 'ejs');

app.use('/static', express.static('public'))


app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/favicon.ico')
});

// app.get('/', (req, res) => {
//     res.send('Hello world. ');
// });



todoController(app)


app.listen(port, () => console.log('The app listening on port ' + port))
