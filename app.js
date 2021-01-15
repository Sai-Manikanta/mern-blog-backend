const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req, res) => {
    res.send('Hello')
})

const MONGO_DB_URI = "mongodb+srv://mani333:Susheela333@cluster0.wszy6.mongodb.net/Blog?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;
mongoose.connect(MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Backend listening on Port ${port}`)))
    .catch(err => console.log('Error while conneted to DB ', err));