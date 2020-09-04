const Promise = require("bluebird");
const mysql = require("mysql");
const dbconnect = require("./con");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const update = async (input) => {
    try {
        const con = mysql.createConnection(dbconnect.dbcon);
        await con.connectAsync();
        console.log(input);

        let sql = "update info set password=? where email=?";
        const run = await con.queryAsync(sql, [
            input.password,
            input.email
        ])
        await con.endAsync();
    } catch (err) {

    }
}
module.exports = {
    update
}