module.exports = {
    const express = require("express");
    let app = express();

    const port = 80;

    console.log('web serving');

    app.get("/", function (req, res) {
        console.log("page requested");
        res.render("../angular-src/dist/angular-src/index.html");
    });

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
};