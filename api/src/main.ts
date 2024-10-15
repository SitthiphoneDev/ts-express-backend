import express from 'express';
import morgan from 'morgan';


const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send({ message: 'Hello API Test Success' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

