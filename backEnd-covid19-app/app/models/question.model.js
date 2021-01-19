const mongoose = require('mongoose');


const QuestionSchema = mongoose.Schema({
    q1: Boolean,
    q2: Boolean,
    q3: Boolean,
    q4: Boolean,
    q5: Boolean,
    q6: Boolean

});

module.exports = mongoose.model('Question', QuestionSchema);
