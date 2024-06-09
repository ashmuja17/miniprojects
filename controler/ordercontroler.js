const orderModel = require('../models/orderModel')

//what is redeused method ? this method is used for callulate all value to one ssingel total ammmount
//accumulative value is used for prives value va add pandrahtuku use pandrathu ku

//create order -/api/v1/order

exports.createOrder = async (req, res, next) => {

  const cardItems = req.body;
  const amount = Number(cardItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
  const status = 'pending';

  //variabel name and  ordmodel name is same thath wy we use dthis type  field : variabelname
  
 const order = await orderModel.create({ cardItems, amount, status })
  // orderModel.create
  res.json({
    success: true,
    order
  })
} 