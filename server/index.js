import express from "express"

const app = express();
const port = 3000;

app.get('/', (res,req) =>{
    req.send("<h1>hello there!!</h1>")
});


app.get('/contact', (res,req) =>{
    req.send("<h1>hello there!!</h1>")
});

app.get('/about', (res,req) =>{
    req.send("<h1>hello there!!</h1>")
});



app.listen(port, () =>{
// use nodemon instead of 'node index.js'
    console.log('Server initialized');
});