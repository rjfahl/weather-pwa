const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build/')))

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`server started on port ${process.env.PORT | 3000}`);
});