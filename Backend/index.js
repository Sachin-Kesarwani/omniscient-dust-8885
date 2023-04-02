const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/User.Route");
const { productRoute } = require("./Routes/Product.Route");

const { AdminRouter } = require("./Routes/Admin.Route");

const {paymentrouter} =require("./Routes/payments");
const { cartRoute } = require("./Routes/Cart.Route");
const { wishlistRoute } = require("./Routes/Wishlist.Route");
const { shippingRoute } = require("./Routes/Shipping.Route");


const app = express();

app.use(express.json({ extended: false }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/admin",AdminRouter);
app.use("/users", userRouter);

app.use("/products", productRoute);
app.use("/carts", cartRoute);
app.use("/wishlist", wishlistRoute);
app.use("/shipping", shippingRoute );

app.use("/payments",paymentrouter)


app.listen(7500, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log(" Cannot Connected to DB");
    console.log(error);
  }
  console.log("Running the server at port 7500");
});
