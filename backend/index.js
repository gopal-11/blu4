import express from 'express';
import router from './routes/NumberRouter.js';
import bodyParserPackage from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { json } = bodyParserPackage;
const port = process.env.PORT;

const app = express();

// Middleware
app.use(json());
app.use(cors());

// Routes
app.use('/api', router);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
