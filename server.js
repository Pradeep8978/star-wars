const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.get('/test', function (req, res) {
      res.send({message: 'Working'})
  })

const port = process.env.PORT || 8080;

app.listen( port, () => console.log(`Server running on port: ${port}`));
