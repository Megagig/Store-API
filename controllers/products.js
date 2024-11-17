const getAllProducts = async (req, res) => {
  res.status(200).json({ message: 'Get all products' });
};

module.exports = {
  getAllProducts,
};
