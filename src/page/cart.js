import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

function Cart({ cartItems, setCartItems }) {
    const [completed, setcompleted] = useState(false);
    //this flase is used for starting not not completed that why we used

    function IncreaseQty(item) {
        if (item.product.stock == item.qty) {
            return;
        }
        //i (param) is inside i we send product then function item.product match compare increse pandrom return is must 
        // store 1 addtocart 1 12line process is not work because stock is limited
        const updatedItem = cartItems.map((i) => {
            if (i.product._id == item.product._id) {
                i.qty++
            }
            return i;
        })
        setCartItems(updatedItem)
    }

    function DecreaseQty(item) {
        if (item.qty > 1) {
            const updatedItem = cartItems.map((i) => {
                if (i.product._id == item.product._id) {
                    i.qty--
                }
                return i;
            })
            setCartItems(updatedItem)
            setcompleted(true);
        }
    }

    function RemoveItem(item) {
        const updatedItem = cartItems.filter((i) => {
            if (i.product._id !== item.product._id) {
                // product item and item product item is = same mean retutn
                return true;
            }
        })
        setCartItems(updatedItem)
    }

    function PlaceOrderHandeler() {
        //fetch method nis used for url 
        fetch(process.env.REACT_APP_API_URL + '/order', {
            //option this post method
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(cartItems)
        })
            //call back because after order cart items clear auto thats why we used this method
            .then(() => {
                //([]) <- this one is means 120 line is comes beacuse 
                setCartItems([]);
            })
    }

    return cartItems.length > 0 ? <Fragment>

        <div>
            <div class="container container-fluid">
                <h2 class="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>

                <div class="row d-flex justify-content-between">
                    <div class="col-12 col-lg-8">
                        {cartItems.map((item) =>
                        (<Fragment>
                            <hr />
                            <div class="cart-item">
                                <div class="row">
                                    <div class="col-4 col-lg-3">
                                        <img src={item.product.image[0].image} alt={item.product.name} height="90" width="115" />
                                    </div>

                                    <div class="col-5 col-lg-3">
                                        <Link to={"/product/" + item.product._id} >{item.product.name}</Link>
                                    </div>


                                    <div class="col-4 col-lg-2 mt-4 mt-lg-0">
                                        <p id="card_item_price">${item.product.prices}</p>
                                    </div>

                                    <div class="col-4 col-lg-3 mt-4 mt-lg-0">
                                        <div class="stockCounter d-inline">
                                            <span class="btn btn-danger minus" onClick={() => DecreaseQty(item)}>-</span>
                                            <input type="number" class="form-control count d-inline" value={item.qty} readOnly />

                                            <span class="btn btn-primary plus" onClick={() => IncreaseQty(item)}>+</span>
                                        </div>
                                    </div>

                                    <div class="col-4 col-lg-1 mt-4 mt-lg-0">
                                        <i id="delete_cart_item" onClick={() => RemoveItem(item)} class="fa fa-trash btn btn-danger"></i>
                                    </div>

                                </div>
                            </div>

                        </Fragment>)
                        )}

                    </div>

                    <div class="col-12 col-lg-3 my-4">
                        <div id="order_summary">
                            <h4>Order Summary</h4>
                            <hr />
                            {/* this method is used for call        */}
                            <p>Subtotal:  <span class="order-summary-values">{cartItems.reduce((acc, item) => (acc + item.qty), 0)} (units)</span></p>
                            <p>Est. total: <span class="order-summary-values">${cartItems.reduce((acc, item) => (acc + item.product.prices * item.qty), 0)}</span></p>

                            <hr />
                            <button id="checkout_btn" onClick={PlaceOrderHandeler} class="btn btn-primary btn-block">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Fragment> : (!completed ? 
         <Fragment><h2 className='mt3'> Your Order is completed!</h2> <p>Thank you Order in Ashhasi Shope </p></Fragment> : <h2 className='mt3'> Your Cart is Empty</h2>)
    //! this one used for some time empty cart imposebel to order means h2 is work
}

export default Cart
