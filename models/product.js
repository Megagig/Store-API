const mongoose = require('mongoose');

// Define the Product Schema
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: [100, 'Product name cannot exceed 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price must be a positive value'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'], // Make the field mandatory
      trim: true,
      minlength: [3, 'Category name must be at least 3 characters long'], // Optional validation
      maxlength: [50, 'Category name cannot exceed 50 characters'], // Optional validation
    },
    stock: {
      type: Number,
      required: [true, 'Stock is required'],
      min: [0, 'Stock cannot be negative'],
      default: 0,
    },
    brand: {
      type: String,
      trim: true,
      maxlength: [50, 'Brand name cannot exceed 50 characters'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    company: {
      type: String,
      enum: {
        values: [
          'Peneth',
          'Casandra',
          'Turning Point',
          'Good Hope',
          'MegaCorp',
        ],
        message:
          'Company name must be either Peneth, Casandra, Turning Point, Good Hope, or MegaCorp',
      },
      //   enum: ['Peneth', 'Casandra', 'Turning Point', 'Good Hope', 'MegaCorp'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
  }
);

// Create the Product Model
const Product = mongoose.model('Product', ProductSchema);

// Export the Model
module.exports = Product;
