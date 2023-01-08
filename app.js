
const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath)) 


app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'./views/home.html'));
});

app.get('/register',(req,res) =>{
    res.sendFile(path.join(__dirname,'./views/register.html'));
});

app.get('/login',(req,res) =>{
    res.sendFile(path.join(__dirname,'./views/login.html'));
});

app.post('/register', (req,res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"));
});

app.post('/login', (req,res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"));
});

app.post('/', (req,res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"));
});

app.listen(8000, () => console.log("Servidor funcionando en puerto 8000"));










