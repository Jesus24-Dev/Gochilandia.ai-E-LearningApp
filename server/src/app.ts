import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Hello from ExpressTS!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});