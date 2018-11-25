const express = require('express');
const path = require('path');
app = express();
port = 80;

app.use(express.static(path.join(__dirname, 'view')));

server = app.get("*", function (req, res) {
    console.log("SPA requested");
    //res.status(404).send('Sorry, we cannot find that!');
    //res.status(500).send({ error: 'something blew up' })
    res.sendFile(path.join(__dirname, 'view/index.html'));
});

app.listen(port, () => console.log(`web server listening at http://localhost:${port}!`))

module.exports = {
    server
};