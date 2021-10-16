const express = require('express');
// const path = require('path');
// const cors = require('cors');

const app = express();
// app.use(cors());

app.use(express.json());

// app.get('/', (req, res) => {
//   return res.sendFile(path.resolve(__dirname, '../index.html'));
// });

app.use((req, res) => {
  res.status(404);
});

app.listen(5000, () => console.log(`Server running on port 5000`));
