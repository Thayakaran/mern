/**
 * Created by Thaya on 07-Jun-18.
 */
var Express = require('Express');
var bodyparser = require ('body-parser');
var Cors = require ('cors');
var router = Express.Router();

var CourseRoute = require('./Controller/ControllRouter');
var app = Express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(Cors());
app.use('/', CourseRoute);

app.listen('3014', 'localhost', function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }

    console.log("Server14 listning port 3014 ");
});
