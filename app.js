require('dotenv').config();
const express = require('express');
require('express-async-errors');
const app = express();
const connectDB = require('./db/connect');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const productsRoute = require('./routes/products');

const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

//product Routes
app.use('/api/v1/products', productsRoute); // this is the route for the products

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  await connectDB(process.env.MONGODB_URI);
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};
start();
