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

app.get('/projects/:tech', async (req, res) => {
  const { tech } = req.params;
  const searchResults = await db.query(
    `SELECT * FROM projects WHERE technology='${tech}';`
  );
  return res.status(200).json(searchResults.rows);
});

app.post('/projects', async (req, res) => {
  const { projectname, technology, description } = req.body;
  if (!projectname || !technology || !description) {
    return res.sendStatus(404);
  }
  technology.forEach((tech) => {
    const insertString = `INSERT INTO projects VALUES ('${projectname}', '${tech}', '${description}')`;
    db.query(insertString);
  });
  return res.sendStatus(200);
});

app.use((req, res) => res.status(404));

app.listen(5001, () => console.log(`Server running on port 5001`));
