const { Router } = require('express');

const { WishlistModel } = require('../Model/Wishlist.Model');
const { userAuthenticate } = require('../Middleware/user.authentication');

const wishlistRoute = Router();

// wishlistRoute.use(authenticate)
wishlistRoute.get('/', userAuthenticate,async (req, res) => {

    const {user}=req.body;

    try {
       await WishlistModel.find({ user}).populate('productId').then(r => {
            return res.status(200).send(r)
        });
    } catch (e) {
        return res.status(400).send(e.message)
    }

})

wishlistRoute.post('/add',userAuthenticate, async (req, res) => {
    const  productId = req.body;
   
    const {user}=req.body;
    
    try { 
        let existingProduct = await WishlistModel.findOne({productId,user}); 
        if(existingProduct){
           return res.status(400).send('product already exists')
        }
       
        let cartItem = new WishlistModel({ productId, user });
        await cartItem.save()
        return res.status(200).send(cartItem);
        
    } catch (e) {
        return res.status(400).send(e.message)
    }
})

wishlistRoute.delete('/delete/:id',userAuthenticate, async (req, res) => {

    const  _id = req.params.id;

    try {
       await WishlistModel.findOneAndDelete({_id});
        res.send({msg:`Product with id:${_id} has been deleted`})
        
    } catch (e) {
        return res.status(400).send(e.message)
    }
})


module.exports = {wishlistRoute};