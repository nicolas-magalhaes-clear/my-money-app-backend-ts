import express, {Express, Request, Response} from 'express'

import router from './src/routes/routes';
import connectDatabase from './src/models/Database';

connectDatabase()

const app : Express = express()
const port = 3003

app.use('/', router)


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });