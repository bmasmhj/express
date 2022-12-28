import express from 'express';
// import cors from 'cors';
import routes from './routes/index.js';
import { sequelize } from './database/connection.js';
import { syncModels } from './database/sync.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { NotFoundError } from './errors/NotFoundError.js';

const app = express();
const port = 5999;
const host = '127.0.0.1';

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Routing Middleware
app.use('/api', routes);
// Not found error handler
app.all('*', () => {
  throw new NotFoundError();
});

// Error Handler middlware
app.use(errorHandler);

app.listen(port, host, async () => {
  try {
    await sequelize.authenticate();
    await syncModels();
    console.log(`Server started in http://${host}:${port}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
