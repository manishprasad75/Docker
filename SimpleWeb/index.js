const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hi there</h1>")
})

app.listen(8080, () =>{
    console.log("Listenign on port 8080")
})