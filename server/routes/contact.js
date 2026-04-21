const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/contacts.json');

// Ensure data directory exists
if (!fs.existsSync(path.dirname(DATA_FILE))) {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}

// Ensure file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// @route   POST api/contact/submit
// @desc    Submit a contact form
// @access  Public
router.post('/submit', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Please enter all fields' });
        }

        const newContact = {
            id: Date.now().toString(),
            name,
            email,
            message,
            submittedAt: new Date().toISOString()
        };

        const fileData = fs.readFileSync(DATA_FILE, 'utf8');
        const contacts = JSON.parse(fileData);

        contacts.push(newContact);

        fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2));

        res.json({ success: true, message: 'Contact form submitted successfully (Stored locally)' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
