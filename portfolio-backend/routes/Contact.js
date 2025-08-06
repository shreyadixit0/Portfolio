const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, message, visitorInfo } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
      visitorInfo,
      date: new Date(),
    });

    await newContact.save();

    res.status(200).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving contact' });
  }
});

module.exports = router;
