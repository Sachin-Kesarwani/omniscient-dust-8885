const { Router } = require("express");
const { ShippingModel } = require("../Model/Shipping.Model");
 
const shippingRoute = Router();

shippingRoute.get("/",async (req, res) => {
  try {
    let data = await ShippingModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

shippingRoute.post("/create",async (req, res) => {
  try {
    await ShippingModel.insertMany(req.body);
    res.status(201).send({ msg: "Product has been added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

shippingRoute.patch("/update/:id",async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ShippingModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send({msg:`Product with id:${ID} has been updated`})
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

shippingRoute.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await ShippingModel.findByIdAndDelete({ _id: ID });
    res.send({msg:`Product with id:${ID} has been deleted`})
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = { shippingRoute };
