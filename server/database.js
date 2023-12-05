const mysql = require('mysql2');

let connection = null;

function databaseConnect() {
    if (!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'rlawlsdud11!',
            database: 'mapleinfodb'
        });

        connection.connect((err) => {
            if (err) {
                console.error('MySQL 연결 error:', err);
                throw err;
            }
            console.log('MySQL에 성공적으로 연결되었습니다.');
        });
    }

    return connection;
}

module.exports = databaseConnect;