import express from 'express';
import routes from './routes/index.js';
import {sequelize} from './database/connection.js'

const app = express();
const port = 5999;
const host = '127.0.0.1';

app.use(express.json());

app.use('/api', routes);

app.listen(port, host, async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log(`Server started in http://${host}:${port}`);
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})
