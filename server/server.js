const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./projectsContainer.js');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/projects', async (req, res) => {
  console.log('in projects get request');
  const searchResults = await db.query(
    `SELECT * FROM projects WHERE technology='${req.body.technology}';`
  ); //not sure if front end will give us data in this format
  return res.status(200).json(searchResults.rows);
});

app.use((req, res) => res.status(404));

app.listen(5001, () => console.log(`Server running on port 5001`));
