import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Productdetail({ cartItems, setCartItems }) {


    const [product, setproduct] = useState(null);
    const [qty, setQty] = useState(1);
    //useparams is used for get id in mongodb
    const { id } = useParams();

    //product is collect dat in 20line with help oh useeffect then that product to show the 21 line
    //then qty 6 line qty to take to summit the qty

    useEffect(() => {

        fetch(process.env.REACT_APP_API_URL + '/product/' + id)
            .then(res => res.json())
            .then(res => setproduct(res.product))
        //http://localhost:3000/search?keyword=oppo last word is saved in searchparams then not call useeffect is help to call thats why we apply searchparams inside
    }, [])

    function addTocart() {
        //this logic is used for add to card is tomuch to move wwe controller to this method 
        const itemExit = cartItems.find((item) => item.product._id == product._id)
        // 
        if (!itemExit) {
            const newItem = { product, qty };
            //both cartitem pass new iten use setitem for change privase state to get state to return to state to save newitem svae
            setCartItems((state) => [...state, newItem]);
            toast('Your card item is succes fully')
        }

    }

    function IncreaseQty() {
        if (product.stock == qty) {
            return
            
        }
        setQty((state) => state + 1)
    }

    function DecreaseQty() {
        if (qty > 1) {
            setQty((state) => state - 1)
            
        }
        
    }

    return product && <div className="container container-fluid">
        <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img src={product.image[0].image} alt="sdf" height="500" width="500" />
            </div>

            <div className="col-12 col-lg-5 mt-5">
                <h3>{product.name}</h3>
                <p id="product_id">Product # {product._id}</p>

                <hr />

                <div className="rating-outer">
                    <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }}></div>
                </div>


                <hr />

                <p id="product_price">{product.price}</p>
                <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus" onClick={DecreaseQty}>-</span>

                    <input type="number" className="form-control count d-inline" value={qty} readOnly />

                    <span className="btn btn-primary plus" onClick={IncreaseQty}>+</span>
                </div>
                <button type="button" onClick={addTocart} disabled={product.stock == 0} id="cart_btn" class="btn btn-primary d-inline ml-4">Add to Cart</button>

                <hr />

                <p>Status: <span id="stock_status" className={product.stock > 0 ? ' text-green-600 animate-pulse' : ' text-red-600 animate-pulse'}>{product.stock > 0 ? 'In stock' : 'out of stock'}</span></p>

                <hr />

                <h4 className="mt-2">Description:</h4>
                <p>{product.description}</p>
                <hr />
                <p id="product_seller mb-3">Sold by: <strong>Amazon</strong></p>

                <div class="rating w-50"></div>

            </div>

        </div>

    </div>
}