exports.createProduct = (req, res, next) => {
  const nama = req.body.nama;
  const price = req.body.price;
  res.json({
    message: "Create products success",
    data: {
      id: 1,
      nama: nama,
      price: price,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({ name: "Gett All Product success", data: [{ id: 1, nama: "sari gandum roma" }] });
  next();
};
