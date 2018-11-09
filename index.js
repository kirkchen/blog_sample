const express = require("express");
const app = express();
const posts = require('./routes/posts');

app.use("/posts", posts);

app.listen(3000, () => console.log("App is listening on 3000"));
