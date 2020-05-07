const express = require('express');
const connectDB = require('./config/db');
const path = require ('path')

const app = express();

app.use(express.json({extended: false}))

connectDB();

//define routes with app.use(routUrl, routFile)
app.use('/api/users', require('./route/api/users'));
app.use('/api/auth', require('./route/api/auth'));
//app.use('/api/posts', require('./route/api/posts'));
app.use('/api/profile', require('./route/api/profile'));
app.use('/api/transaction', require('./route/api/transaction'));

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'));

    app.get( '*', ( req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`) );