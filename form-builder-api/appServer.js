const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const formRoutes = require('./routes/formRoutes');

const app = express();
app.use(cors());
// Middleware
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/forms', formRoutes);

mongoose.connect('mongodb+srv://koratharsh31:H7vsH1L2uMvVd86W@cluster0.lsbip.mongodb.net/form_builder?retryWrites=true&w=majority&appName=Cluster0', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.error('Connection Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));