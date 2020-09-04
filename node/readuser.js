const Promise = require("bluebird");
const mysql = require("mysql");
const data = require("./con");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const read = async (input) => {
    const con = mysql.createConnection(data.dbcon);
    await con.connectAsync();
    let sql = "select * from info where email = ? ";
    let readquery = await con.queryAsync(sql, [input]);
    return readquery;

}

module.exports = {
    read
}