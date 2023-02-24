const express = require("express");
const app = express();
const apiRoutes = require('./Routes/apiRoutes')
const htmlRoutes = require('./Routes/htmlRoutes')

const PORT = 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function(){
    console.log(`Server is listening on PORT: ${PORT}`);
});