import express, { Request, Response } from 'express';
import sermonsRouter from './sermons/sermons.routes';
import tagsRouter from './tags/tags.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

// Enable all CORS requests
app.use(cors());

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({extended: true}));

// Add security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST)

if(process.env.NODE_ENV == 'development'){
    app.use(logger);
    console.log(process.env.NODE_ENV + ' in dev mode')
}

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Sermons API</h1>');
});

// Mount routers
app.use('/', [sermonsRouter, tagsRouter]);

app.listen(port, () => {
    console.log(`Sermons API listening at http://localhost:${port}`)
});
