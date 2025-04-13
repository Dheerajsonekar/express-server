const express = require('express');
const app = express();


app.use(express.json());


app.get('/orders', (req, res)=>{
    res.send(`<h1>here is the list of all orders</h1>`);
})

app.post('/orders', (req, res)=>{
    res.send(`<h1>A new order has been created</h1>`)
})

app.get('/users', (req, res)=>{
    res.send(`<h1>here is the list of all users</h1>`)
})
app.post('/users', (req, res)=>{
    res.send(`<h1>a new user has been added</h1>`)
})

app.use("*", (req, res)=>{
    res.status(404).send(`<h1> page not found</h1>`)
})

app.listen(3000, ()=>{
    console.log("server is running");
})