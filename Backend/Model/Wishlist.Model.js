const { Schema, model } = require("mongoose");

const wishlistSchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'user' },
    productId: { type: Schema.Types.ObjectId, ref: 'product' }

}, {
    versionKey: false
})

const WishlistModel = model('wishlist', wishlistSchema);

module.exports ={WishlistModel};