const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

// Defining the routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/team', require('./routes/team'));


app.listen(port, () => {
    console.log(`Server listening on : http://localhost:${port}`);
})