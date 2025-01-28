import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);


Connection();

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));