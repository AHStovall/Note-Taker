const express = require("express");
const app = express();
// insert Routes
// insert Routes

const PORT = 3001;

app.use(express.static('public'));
app.use(express.urlencoded);
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);