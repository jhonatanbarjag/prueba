import express from 'express';
import {connect} from './config/db.js';
import alumnoroute from './routes/alumnoroute.js';
import morgan from 'morgan';

const app = express();

app.use (express.json()); 
app.use(morgan('dev')); 


app.use('/api', alumnoroute);

connect();

const port = 3003;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
