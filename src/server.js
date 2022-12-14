import express  from 'express';
import routes from './routes/index.js';
const app = express();
const port = 5999;
const host = '127.0.0.1';

app.use(express.json());

app.get('/', (req, res , next ) => {
    // res.send('hello world')
    res.json({status : true , message : 'Sever is alives'})
})
app.use('/api' , routes );
// app.post('/', (req, res , next ) => {
//     // res.send('hello world')
//     res.json({data:req.body})
// })

app.listen(port , host , () =>{
        console.log(`server starteds in http://${host}:${port}`);
})
