//export is ststement

const productModel = require('../models/productmodel');

//get product API - that url name is /Api/v1/product

exports.getproduct = async (req, res, next) => {
    // this qurey object is used for collected data in schema to show search box
    const query = req.query.keyword?{ name : { 
        //regex is one operater
        $regex: req.query.keyword,
        //Option is one operater
        $options: 'i'
    }}:{}
    //assincromess meth this methed is used for {wath we need for our name or any else } then {} this used for call key and value
    const products = await productModel.find(query);

    res.json({
        sucess: true,
        products
    })

}

//get product API - that url name is /Api/v1/product/:id
//then (async ) this methode is used for merged for eg.we put id in finnd method collect that summit here
exports.getsingeltproduct = async (req, res, next) => {
    console.log(req.params.id, 'ID')

    // try catch is used for when unwanted id we usde that time mongoos are clased thats why we used ths try catch
    try {

        const product = await productModel.findById(req.params.id);
        res.json({
            sucess: true,
            product
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
       })
    }


}
