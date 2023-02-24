const express = require("express");
const app = express();
const apiRoutes = require('./Routes/apiRoutes')
const htmlRoutes = require('./Routes/htmlRoutes')

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
    console.info(`${req.method} request received to get notes html file`);
  });
  
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/index.html'))
      console.info(`${req.method} request received to get index html file`);
  })
  

app.listen(PORT, function(){
    console.log(`Server is listening on PORT: ${PORT}`);
});



