const mongoose = require('mongoose');
const Contact = require('./models/Contact');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('Connected to DB');
        const contacts = await Contact.find();
        console.log('Contacts found:', contacts.length);
        console.log(JSON.stringify(contacts, null, 2));
        mongoose.connection.close();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
