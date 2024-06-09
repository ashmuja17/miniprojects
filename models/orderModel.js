const mongoose = require('mongoose');

const orderschema  = new mongoose.Schema({
    cardItems:Array,
    amount:String,
    status:String,
    createAt:Date
})

const orderModel = mongoose.model('order', orderschema);
module.exports = orderModel;