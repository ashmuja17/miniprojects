// connected databse
const mongoose = require('mongoose');



const connectDatababe = () => {

    // con is variyabel and connection (property) host(variyabel) this all used for host kondu varathuku

    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log('mongoDB connected to host:'+ con.connection.host)
    })
};

module.exports = connectDatababe

