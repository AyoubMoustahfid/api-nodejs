const express = require('express');

const path = require('path');

const app = express();

app.set('view engine' , 'ejs');
app.set('views', 'views');
 //default 'views'

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, 'statics')))


app.get('/', (req, res, next) =>{
    let user = {
        name : "ahh"
    };
    res.render('index', {user})
})

app.post('/', (req, res, next) =>{
let user  = {
    name : req.body.name
}
    res.render('index', {
        user
    })
})

app.listen(3000, () => console.log('server is run ...'));