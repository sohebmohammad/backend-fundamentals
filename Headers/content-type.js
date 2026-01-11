import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());

app.get('/content-type', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'Hello, World!' }));
});

const PORT = process.env.PORT || 3000;      

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

