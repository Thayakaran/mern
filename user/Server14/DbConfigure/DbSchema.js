/**
 * Created by Thaya on 07-Jun-18.
 */
const mongoose = require('./DbConnection');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

    name:{
        type: String,
        require: true
    },
    code:{
        type: String,
        require:true
    },
    passMark:{
        type:Number,
        require:true
    },
    lectureInCharge:{
        type:String,
        require:true
    },
    subject: [String]

});

mongoose.model("CourseSchema", CourseSchema);

const SubjectSchema = new Schema({

    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true
    }

});

mongoose.model("SubjectSchema",SubjectSchema);


// mongoose.connect("mongodb://localhost:27017/testdb",function (err) {
//     if(err){
//         console.log(err);
//         process.exit(-1);
//     }
//     console.log("Database testdb connected.....")
// });


module.exports = mongoose;