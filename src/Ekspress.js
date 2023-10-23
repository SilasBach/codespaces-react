const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // WARNING: Storing passwords in plain text is insecure
  fs.writeFile('credentials.txt', `${username}:${password}`, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      res.status(500).send('Server error');
    } else {
      res.send('Login successful');
    }
  });
});

app.get('/credentials', (req, res) => {
    fs.readFile('credentials.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.status(500).send('Server error');
      } else {
        res.send(data);
      }
    });
  });

app.listen(3003, () => console.log('Server listening on port 3003'));