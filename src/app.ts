import express from 'express';
import bodyParser from 'body-parser';
import { setRoutes } from './routes/mangaRoutes';
import { i18nMiddleware } from './i18n/index';
import { connectToDatabase } from './config/index';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(i18nMiddleware);

// Connect to the database
connectToDatabase();

// Set up routes
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});