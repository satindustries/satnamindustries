const express = require('express');
const app = express();
const PORT = 3000;

// Static files serve karein (HTML, CSS, JS)
app.use(express.static('C:\Users\Srabani\OneDrive\Desktop\projectsindustries\project2'));

// Home route (index.html serve karein)
app.get('/', (req, res) => {
  res.sendFile('C:\Users\Srabani\OneDrive\Desktop\projectsindustries\project2\index.html' + '/index.html');
});

// API route example
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});

// Server ko start karna
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

