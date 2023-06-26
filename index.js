const express = require('express');
require("dotenv").config()

const app = express();


app.get('/', (req, res) => {
    res.send(`message : base url ${process.env.NAME}`)
})

app.get('/blogs', (req, res) => {
    res.send("message : bloh.. blah...")
})


app.listen(process.env.PORT, async ()=>{
   try {
    console.log(`listening on port ${process.env.PORT}`)
   } catch (error) {
    console.log(error);
   }
})