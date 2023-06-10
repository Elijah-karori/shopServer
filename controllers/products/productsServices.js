const Product = require("../../models/Products");
const DeletedProduct = require("../../models/deletedProducts");

// json the product.ejs template with all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json( { data: products, title: "All Products" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// json the product.ejs template with a specific product
exports.getProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const product = await Product.findOne({ name });
    if (!product) {
      return res.json( { data: "Item not found", title: "Search" });
    }
    res.json({ data: product, title: "Product Details" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// json the product with a specific product
exports.searchProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const product = await Product.findOne({ name });
    if (!product) {
      return res.json( { data: "Item not found", title: "Search" });
    }
    res.json({ data: product, title: "Product Details" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}