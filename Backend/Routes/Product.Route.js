const { Router } = require("express");
const { authentication } = require("../Middleware/admin.authentication");
const { ProductModel } = require("../Model/Product.Model");

const productRoute = Router();

productRoute.get("/:id",async (req, res) => {
  const ID = req.params.id;
  try {
    let data = await ProductModel.find({ _id: ID });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

  productRoute.get("/", async (req, res) => {
    const frame_type = req.query.frame_type;
    const frame_color = req.query.frame_color;
    const category =req.query.category
    const price=req.query.price
    const high=req.query.pHL
    const low=req.query.pLH
     if(frame_type && frame_color){
      try {
          let productData =await ProductModel.find({$and:[{frame_type: { $regex: `${frame_type}`, $options: "i" }},{frame_color: { $regex: `${frame_color}`, $options: "i" }}]})
          res.send(productData)
      } catch (err) {
          console.log(err)
          res.status(500).send({message:err.message})
      } 
    }
    else if (frame_type) {
        console.log(frame_type);
      try {
        const productData = await ProductModel.find({
            frame_type : { $regex: `${frame_type }`, $options: "i" },
        });
        res.send(productData);
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
    
    }
    else if(category){
      try {
        const productData = await ProductModel.find({
            category: { $regex: `${category}`, $options: "i" },
        });
        res.send(productData);
      } catch (error) {
        res.status(500).send({ message: err.message });
      }
    } else if(high){
      try {
        
          let productData =await ProductModel.find().sort({price:high})
          res.send(productData) 
          
      } catch (err) {
          console.log(err)
          res.status(500).send({message:err.message})
      }
  } else if(low){
    try {
      
        let productData =await ProductModel.find().sort({price:low})
        res.send(productData) 
       
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
  }
     else if(price){
      try {
        const productData = await ProductModel.find({price:{$lt:price}});
        res.send(productData);
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
    
  } 
    else {
      const product = await ProductModel.find();
      res.send(product);
    }
  });

  productRoute.get('/page/:page',async(req,res)=>{
    const page = req.params.page ? parseInt(req.params.page) : 1;
    const limit = 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
  
    try {
      const products = await ProductModel.find().skip(startIndex).limit(limit);
      const count = await ProductModel.countDocuments();
  
      const result = {};
      if (endIndex < count) {
        result.next = {
          page: page + 1,
          limit: limit
        };
      }
      if (startIndex > 0) {
        result.previous = {
          page: page - 1,
          limit: limit
        };
      }
      result.products = products;
  
      res.status(200).send(result.products);
  
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

productRoute.post("/create", authentication,async (req, res) => {
  try {
    await ProductModel.insertMany(req.body);
    res.status(201).send({ msg: "Product has been added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

productRoute.patch("/update/:id",authentication,async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send({msg:`Product with id:${ID} has been updated`})
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

productRoute.delete("/delete/:id",authentication, async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.send({msg:`Product with id:${ID} has been deleted`})
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = { productRoute };
