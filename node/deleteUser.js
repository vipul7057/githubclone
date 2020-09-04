const Promise = require('bluebird');
const mysql = require('mysql');

const dbconnect = require("./con");


Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

let deleteUser = async (user) => {
    try {
        const connection = mysql.createConnection(dbconnect.dbcon);
        await connection.connectAsync();
        let sql = "DELETE FROM info WHERE email = ? ";
        let result = await connection.queryAsync(sql, [
            user
        ]);

        console.log("Affected row(s) : ", result.affectedRows);

        await connection.endAsync();


    } catch (err) {
        console.log(err.name);
    }
}

module.exports = {
    deleteUser
}