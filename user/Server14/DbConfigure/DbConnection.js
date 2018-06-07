/**
 * Created by Thaya on 07-Jun-18.
 */
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/testdb",function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Database testdb connected.....")
});

module.exports = mongoose;