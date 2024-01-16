const express = require('express');
const cors = require('cors');
const googleMaps = require('@google/maps');

const app = express();
const port = 3001;

app.use(cors({
    origin: '*'
}));

app.get('/reviews/:id', async (req, res) => {
    try {
        const googleMapsClient = googleMaps.createClient({
            key: req.query.key,
            Promise: Promise
        });

        const response = await googleMapsClient.place({
            placeid: req.params.id,
            language: 'en'
        }).asPromise();

        const reviews = response.json.result.reviews;
        res.json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while fetching reviews');
    }
});

app.listen(port, () => {
    console.log(`Server running`);
});