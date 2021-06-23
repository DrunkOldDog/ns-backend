// server.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

const path = require('path');

app.use(express.static('build'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api/loan", require("./routes/loan-routes"));
app.use("/api/information", require("./routes/information-routes"));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});