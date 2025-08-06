const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Routes
const Contact = require('./models/Contact');

app.post('/api/contact', async (req, res) => {
    const { name, email, message, visitorInfo } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            message,
            visitorInfo,
        });

        await newContact.save();
        res.status(200).json({ msg: 'Message Sent!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
