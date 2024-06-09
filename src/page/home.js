import { Fragment, useEffect, useState } from 'react'
import Productcard from '../components/productcard'
import { useSearchParams } from 'react-router-dom';

//this process is used for take inditual detail then [product name is use name then usestae is used for function]
//useeffect is means when page is refersh that one time function work that why we used useeffect
export default function Home() {

    const [products, setproducts] = useState([]);
    const [searchparams, setsearchparams] = useSearchParams()
    //then is method is used for comeing fun to take change to json meth  14
    //then that json method is saved by set product  {//res is responsibel is parameter}

    useEffect(() => {

        fetch(process.env.REACT_APP_API_URL + '/product?'+searchparams)
        .then(res => res.json())
        .then(res => setproducts(res.products))
        //http://localhost:3000/search?keyword=oppo last word is saved in searchparams then not call useeffect is help to call thats why we apply searchparams inside
    },[searchparams])

    return <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">

                {/* product card we used to lopp because contant will we come again */}
                {products.map(product => <Productcard product={product}/>)}
                {/* <Productcard /> */}
            </div>
        </section>


    </Fragment>
}