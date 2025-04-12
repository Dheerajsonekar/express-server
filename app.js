const express = require('express');
const app = express();


const middlewareUser = (req, res, next)=>{
    req.user = "Guest";
    next();
}

app.get('/welcome', middlewareUser, (req, res)=>{
    res.send(`<h1>hello ${req.user}</h1>`);
})

app.listen(3000, ()=>{
    console.log("server is running");
})