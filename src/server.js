import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 5999;
const host = '127.0.0.1';

app.use(express.json());

app.use('/api', routes);
// app.use('/', (req, res, next) => {
//     res.json({ status: true, message: '-----Server is alive----' })
// })

app.listen(port, host, () => {
    console.log(`Server started in http://${host}:${port}`);
})
