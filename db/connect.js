const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true, // Parses MongoDB connection strings properly
      useCreateIndex: true, // Allows automatic creation of indexes
      useFindAndModify: false, // Disables deprecated MongoDB `findAndModify`
      useUnifiedTopology: true, // Enables the new unified topology layer
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Terminate the app if the connection fails
  }
};

module.exports = connectDB;
