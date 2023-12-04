const mysql = require('mysql2');

function databaseConnect() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rlawlsdud11!',
        database: 'mapleinfodb'
    });

    connection.connect((err) => {
        if (err) {
            console.error('MySQL 연결 에러:', err);
            throw err;
        }
        console.log('MySQL에 성공적으로 연결되었습니다.');
    });

    return connection;
}

module.exports = databaseConnect;
