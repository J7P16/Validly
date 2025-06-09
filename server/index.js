import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import generateInsights from './api/generateInsights.js';

dotenv.config();
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Route
app.post('/api/generateInsights', generateInsights);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
