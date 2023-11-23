import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json()); 

const cartApi = 'http://localhost:3002/cart';
const ticketsApi = 'http://localhost:3002/tickets';

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

app.put('/cart/:id', async (req, res) => {
  const itemId = req.params.id;
  const updatedQuantity = req.body.quantity;

  try {
    await axios.put(`${cartApi}/${itemId}`, { quantity: updatedQuantity });
    res.json({ success: true });
  } catch (error) {
    console.error('Error updating quantity:', error);
  }
});

app.delete('/cart/:id', async (req, res) => {
  const itemId = req.params.id;

  try {
    await axios.delete(`${cartApi}/${itemId}`);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting item from cart:', error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/tickets', async (req, res) => {
  try {
    const response = await axios.get(ticketsApi);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching ticket data:', error);
  }
});

app.post('/tickets', async (req, res) => {
  const newItem = req.body;
  try {
    await axios.post(ticketsApi, newItem);
    res.json({ success: true });
  } catch (error) {
    console.error('Error bying ticket:', error);
  }
});