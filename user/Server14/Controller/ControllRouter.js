/**
 * Created by Thaya on 07-Jun-18.
 */
const express = require("express");
const  Controller = require("./Controller");

var router = express.Router();

router.get("/course/", function (req,res) {
    Controller.getCourse().then(function (response) {
        res.status(response.status).json(response);
    }).catch(function (err) {
        res.status(err.status).json(err);
    });
});

router.post("/course", function (req,res) {
    Controller.addCourse(req.body).then(function (response) {
        res.status(response.status).json(response);
    }).catch(function (err) {
        res.status(err.status).json(err);
    });
});

router.get("/course/:code/subject",function (req,res) {
    Controller.getSubjects(req.params.code).then(function (response) {
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

router.get("/course/:code/fee",function (req,res) {
    Controller.getCourseFee(req.params.code).then(function (response) {
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

router.post("/subject",function (req,res) {
    Controller.addSubjects(req.body).then(function (response) {
        res.status(response.status).json(response);
    }).catch(function (err) {
        res.status(err.status).json(err);
    });
});

module.exports = router;