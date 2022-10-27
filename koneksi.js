var mysql= require('mysql');
//buat koneksi
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tableku'
});
conn.connect((err)=>{
    if(err) throw err;
    console.log("mysql terkoneksi");
});

module.exports = conn;
