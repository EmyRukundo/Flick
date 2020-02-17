import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
let port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hi with Express'));

app.listen(port, function(){
    console.log('the started the server', + port)
});