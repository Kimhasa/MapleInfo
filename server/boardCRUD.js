const databaseConnect = require('./database');
const connection = databaseConnect();

function writing(req, res) {
    const { title, contents } = req.body;

    console.log(req.sessionID);
    const userNo = `SELECT user_no FROM user WHERE user_session_id = '${req.sessionID}`;

}

function initCreatePost(app) {
    app.post('/writing', writing);
}

module.exports = initCreatePost;
