const express = require('express');
const path = require('path')

const app = express();
const port = 3000;
app.use(express.json())
// const bodyParser = require('body-parser');
//file path into bundled files
// const DIST_DIR = path.join(__dirname, '../dist'); 
// const HTML_FILE = path.join(DIST_DIR, 'index.html'); 

//routers
const authRoutes = require('./route/auth');

// app.use(express.static(path.join(__dirname, '../dist')));

// app.get('/', (req,res) => {
//   res.sendFile(__dirname, '../dist/index.html')
// })

app.use(express.static(path.join(__dirname, '../src')));

app.get('/', (req,res) => {
  res.sendFile(__dirname, '../src/index.html')
})

//redirect routers
app.use('/api', authRoutes);


//catchall unknown route
app.get('*', (req, res) =>  {
  res.status(404).json('<h1>catch-all route handler activated</h1>');
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'global error handler invoked' },
  }
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

//startserver
app.listen(port, () => {
  console.log('listening on the follwing port:', port);
})