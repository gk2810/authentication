const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'some',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        mongoUrl: 'mongodb+srv://stonecold:6356300098@cluster0.mcfmva2.mongodb.net'
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.get('/', (req, res) => {
    console.log(req.session.viewCount);
    res.send('<h1>Hello World (session)</h1>')
})

app.listen(1234, () => {
    console.log('server is running on 12324')
})  