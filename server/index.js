
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const contactRoutes = require('./routes/contact');
const servicesRoutes = require('./routes/services');
const auditRoutes = require('./routes/audit');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/audit', auditRoutes);

app.get('/', (req, res) => {
    res.send('Black Leo Ventures Clone API is running (JSON Storage)');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
