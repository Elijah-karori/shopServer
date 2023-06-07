const Product = require("../../models/Products");
const DeletedProduct = require("../../models/deletedProducts");

// Render the product.ejs template with all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("product", { data: products, title: "All Products" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Render the product.ejs template with a specific product
exports.getProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const product = await Product.findOne({ name });
    if (!product) {
      return res.render("product", { data: "Item not found", title: "Search" });
    }
    res.render("product", { data: product, title: "Product Details" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Render the product.ejs template after creating a product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, picture, price, powerRatting, category } = req.body;
    const product = new Product({
      name,
      description,
      picture,
      price,
      powerRatting,
      category,
    });
    await product.save();
    res.render("product", { data: "Product created successfully", title: "Add Product" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Render the product.ejs template after updating a product
exports.updateProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const updatedProduct = await Product.findOneAndUpdate({ name }, req.body, { new: true });
    if (!updatedProduct) {
      return res.redirect("/products");
    }
    res.render("product", { data: updatedProduct, title: "Product Details" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a product and redirect to the product.ejs template
exports.deleteProduct = async (req, res) => {
  try {
    const { name } = req.params;
    await Product.findOneAndDelete({ name });
    res.redirect("/products");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
