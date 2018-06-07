/**
 * Created by Thaya on 07-Jun-18.
 */
const mongoose = require("../DbConfigure/DbSchema");

const CourseSchema = mongoose.model("CourseSchema");
const SubjectSchema = mongoose.model("SubjectSchema");

var Controller = function () {

    this.getCourse = function () {
        return new Promise(function (resolve, reject) {
            CourseSchema.find().exec().then(function (data) {
                resolve({status:200, searchedCourses:data});
            }).catch(function (err) {
                reject({status:500, message:"Error : "+err});
            });
        });
    }

    this.addCourse = function(courseInstance){
        return new Promise(function (resolve, reject) {
            var course = new CourseSchema({
                name: courseInstance.name,
                code: courseInstance.code,
                passMark: courseInstance.passMark,
                lectureInCharge: courseInstance.lectureInCharge,
                subject: courseInstance.subject
            });
            
            course.save().then(function () {
                resolve({status:200, message:"course added sucessfully"});
            }).catch(function (err) {
                reject({status:500, message:"Failed to add :"+err});
            });
        });
    }

    this.getSubjects = function (code) {
        return new Promise(function (resolve, reject) {
            CourseSchema.find({code:code}).exec().then(function (data) {

                SubjectSchema.find({id: {$in:data[0].subject}}).exec().then(function (data) {
                    resolve({status:200, searchedCourseSubjects: data});

                }).catch(function (err) {
                    reject({status:500, message:"Error : "+err});
                });
            }).catch(function (err) {
                reject({status:500, message:"Error : "+err});
            });
        });
    }

    this.getCourseFee = function (code) {
        return new Promise(function (resolve, reject) {
            CourseSchema.find({code:code}).exec().then(function (data) {

                SubjectSchema.find({id: {$in:data[0].subject}}).exec().then(function (data) {

                    var total = 0;
                    for(var i=0; i<data.length ; i++ ){
                        total +=  data[i].amount;
                    }
                    resolve({status:200, TotalAmount: total});

                }).catch(function (err) {
                    reject({status:500, message:"Error : "+err});
                });
            }).catch(function (err) {
                reject({status:500, message:"Error : "+err});
            });
        });
    }

    this.addSubjects = function (subjectInstance) {
        return new Promise(function (resolve, reject) {
            var subjects = new SubjectSchema({
                id: subjectInstance.id,
                name: subjectInstance.name,
                description: subjectInstance.description,
                amount: subjectInstance.amount
            });

            subjects.save().then(function () {
                resolve({status:200, message:"subjects added sucessfully"});
            }).then(function (err) {
                reject({status:500, message:"Failed to add : "+err});
            });
        });
    }
}

module.exports = new Controller();