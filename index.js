const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors);

// Defining the routes

app.listen(port, () => {
    console.log(`Server listening on : http://localhost:${port}`);
})