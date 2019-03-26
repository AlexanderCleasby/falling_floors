const express = require('express');
const app = express();
const port = process.env.port || 3000

app.get('/', (req, res) => {
    //console.log(req.cookies)
    res.sendFile(__dirname + '/index.html')
});
app.use(express.static(__dirname + '/public'));

app.listen(port,()=>{console.log(`listening on port ${port}`)});
