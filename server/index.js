const express = require('express');
const path = require('path')

const app = express();
const port = 3000;
//file path into bundled files
const DIST_DIR = path.join(__dirname, '../dist'); 
const HTML_FILE = path.join(DIST_DIR, 'index.html'); 

app.use(express.static(DIST_DIR));

app.get('/api', (req,res) => {
  res.json({me: 'Aaron'});
})
app.get('/', (req,res) => {
  res.sendFile(HTML_FILE);
})

app.listen(port, () => {
  console.log('listening on the folliwng port:', port);
})