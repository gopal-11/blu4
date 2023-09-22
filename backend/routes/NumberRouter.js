// backend/routes/NumberRouter.js
import express from 'express';
import { addNumber } from '../controllers/NumberController.js';

const router = express.Router();

// POST method route to return result for value & selected option
router.post('/numbers', addNumber);

export default router;
