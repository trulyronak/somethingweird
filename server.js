const express = require('express');
const http = require('http');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get("/data", (req, res) => {
    // res.send({
    //     data: "wow!"
    // })
    res.send({
        data: "wow!",
        tags: ["wow", "tags!", "mama mia!"]
    })
})

http.createServer(app).listen(process.env.OPTIC_API_PORT || 4000)