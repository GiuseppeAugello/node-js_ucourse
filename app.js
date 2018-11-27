//Node modules
//const http = require('http'); ______________________________________ useless due to Express
//3RD parties
const express = require ('express');

const app = express();

app.use('/', (req,res,next) => {
    console.log('this always run');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('add-product');
    res.status(200).send('<h1>Add-Product!!</h1>')
});

app.use('/', (req, res, next) => {
    console.log('First middleware');
    next();//next allow the request to continue to the middleware 
});

app.use((req, res, next) => {
    console.log('Second middleware');
    res.status(201).send('<h1>Hello from express</h1>')
    });

//const server = http.createServer(app); _______________________________ useless due to Express

//server.listen(3000);___________________________________________________ useless due to Express

app.listen(3000);


