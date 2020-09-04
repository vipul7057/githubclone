const Promise = require('bluebird');
const mysql = require('mysql');

const config = require('./con');

Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

let addUser = async (user) => {
    try {
        const connection = mysql.createConnection(config.dbcon);
        await connection.connectAsync();
        let sql = "INSERT INTO info (username,password,email) VALUES (?,?,?)";
        let result = await connection.queryAsync(sql, [
            user.username,
            user.password,
            user.email,
        ]);

        console.log("Affected row(s) : ", result.affectedRows);

        await connection.endAsync();


    } catch (err) {
        console.log(err.name);
    }
}

module.exports = {
    addUser
}