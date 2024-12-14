const express = require("express");

const app=express();

//middleware
app.use(express.json());

//sample data
const nameset = [
    {id:1,name:'David'},
    {id:2,name:'Jhon'},
    {id:3,name:'Tom'},
];

//Get
app.get('/api/nameset',(req,res) => {
    res.status(200).json(nameset);
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


