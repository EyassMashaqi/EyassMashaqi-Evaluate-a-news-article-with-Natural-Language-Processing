const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

// Dynamically import node-fetch
let fetch;
(async () => {
    fetch = (await import('node-fetch')).default;
})();

// Your MeaningCloud API key
const API_KEY = process.env.API_KEY;
app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

app.post('/api', async (req, res) => {
    const { url } = req.body;
    console.log('Received URL:', url);

    try {
        const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `key=${API_KEY}&url=${url}&lang=en`,
        });

        const data = await response.json();
        console.log('MeaningCloud API Response:', data);

        res.json({
            polarity: data.score_tag,
            subjectivity: data.subjectivity,
            text: data.sentence_list[0]?.text || 'No text available',
        });
    } catch (error) {
        console.error('Error fetching data from MeaningCloud:', error);
        res.status(500).send('Error processing your request.');
    }
});

app.listen(8000, () => {
    console.log('Server running on port 8000!');
});
        