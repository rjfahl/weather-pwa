const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.listen(process.env.PORT || 5000, () => {
    console.log("server started on port " + process.env.PORT || 5000);
});