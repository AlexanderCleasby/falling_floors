const express = require('express');
const app = express();


app.get('/', (req, res) => {
    //console.log(req.cookies)
    res.sendFile(__dirname + '/index.html')
});
app.use(express.static(__dirname + '/public'));

app.listen(3001);