/*
 * @Author: Ngo Hung Phuc
 * @Date:   2016-11-19 15:38:22
 * @Last Modified by:   Ngo Hung Phuc
 * @Last Modified time: 2016-11-26 01:19:28
 */

var mongoose = require('mongoose');
var answerSchema = new mongoose.Schema({
    QuestionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },
    UserAnswer: {
        type: String,
        require: true
    },
    Content: {
        type: String,
        require: true
    },
    CreateDate: {
        type: Date,
        require: true
    },
    like: {
        type: Array,
        default: []
    },
    dislike: {
        type: Array,
        default: []
    }
});

var Answer = mongoose.model('answers', answerSchema);
var getAnswerViaQuestion = function (id, callback) {
    Answer.find({"QuestionId": {"$in": id}}, callback);
};

var submitAnswer = function (answer, callback) {
    Answer.collection.insert(answer, callback);
};

module.exports = {
    Answer: Answer,
    getAnswerViaQuestion: getAnswerViaQuestion,
    submitAnswer: submitAnswer
};