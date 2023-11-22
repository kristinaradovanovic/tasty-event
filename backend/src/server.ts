import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json()); 

const cartApi = 'http://localhost:3002/cart';

app.get('/cart', async (req, res) => {
  try {
    const response = await axios.get(cartApi);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching cart data:', error);
  }
});

app.post('/cart', async (req, res) => {
  const newItem = req.body;

  try {
    await axios.post(cartApi, newItem);
    res.json({ success: true });
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});