module.exports = (app) => {
    const questions = require('../controllers/question.controller.js');

    app.post('/question', questions.create);

    app.get('/question', questions.findAll);


}