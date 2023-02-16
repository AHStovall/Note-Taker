const express = require("express");
const app = express();
require('./Develop/apiRoutes')
require('./Develop/htmlRoutes')

const PORT = 3001;

app.use(express.static('public'));
app.use(express.urlencoded);
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function(){
    console.log(`Server is listening on PORT: ${PORT}`);
});