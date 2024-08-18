const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Node API server");
});

app.post('/api/create',(req,res) => {
    
})

mongoose.connect("mongodb://localhost:27017/")
.then(() =>{
    console.log("connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() =>{
    console.log("Connection failed to database!");
})

