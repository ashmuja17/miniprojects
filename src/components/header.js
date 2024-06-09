import { Link } from "react-router-dom";
import Search from "./search";

export default function Header({ cartItems }) {
    return (
        <nav className="navbar row  border-go">
            
            <div className="col-12 col-md-3 ">
                <div className="navbar-brand w-10 ">

                    <Link to="/"><img src="/image/logo1.jpg" /></Link>
                </div>
            </div>

            

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <Search />
            </div>

            

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">

                <Link to={'/cart'}>
                    <span id="cart" className="ml-3"> Cart</span>
                    <span className="ml-1" id="cart_count">{cartItems.length}</span>
                </Link>
            </div>
            
        </nav>
    )
}