import express from 'express'
import cors from 'cors'

const app = express();
const port = 3002;

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
