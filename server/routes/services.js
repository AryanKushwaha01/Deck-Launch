const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/services.json');

// @route   GET api/services
// @desc    Get all services
// @access  Public
router.get('/', (req, res) => {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            return res.status(404).json({ success: false, message: 'Services data not found' });
        }
        const fileData = fs.readFileSync(DATA_FILE, 'utf8');
        const services = JSON.parse(fileData);
        res.json(services);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
