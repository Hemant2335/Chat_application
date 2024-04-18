import express from 'express';
const app = express();
import cookieParser = require('cookie-parser');
import cors from "cors"

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', require('./routes/auth'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});