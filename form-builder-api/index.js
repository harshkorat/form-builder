const express = require('express');
const app = express();

// Use the built-in express.json() middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const formController = require('./controllers/formController');
app.post('/api/forms/save', formController.saveForm);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});