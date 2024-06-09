import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Search() {
    //we used for keyword[ this one is used for type in search box] and setkeyword[this one is used for state maathakudiyathu] 
    const [keyword , setkeyword] = useState("");
    //useNavigate is used for take url in that product
    const navigate = useNavigate();
    //searchhandel is used for button to call product to show to page
    const searchHandler = () => {
           navigate('/search?keyword='+keyword)
    }
    return <div className="input-group border to-black rounded-md ">
        <input
            type="text"
            id="search_field"
            //onchange is used for save
            onChange={(e) => setkeyword(e.target.value) }
            className="form-control"
            //onbluer is used for (when we type the content in searchbox imedntly to comes product)
                onBlur={searchHandler}
            placeholder="Enter Product Name ..."
        />
        <div className="input-group-append">
            <button onClick={searchHandler}  id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        </div>
    </div>

}