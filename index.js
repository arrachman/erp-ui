const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const http = require('http');
const reload = require('reload');
const fs = require('fs');

// parse application/json
app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3307',
  password: '',
  database: 'erpfix'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
	var i = 0;
	var s = 0;
	var d = [5,7,8,3];
	
	for(i=0;i< d.length;i++)
	{
		s = s + d[i];
		i = i + 1;
		//a += "ab";
	}
});
 
//tampilkan semua data product
app.get('/api/abc',(req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  fs.readFile('./abc.html', null, function(err, data){
    if(err) {
      res.writeHead(404);
      res.write('File not Found!');
    }else{
      res.write(data);
    }
  });
});
 
//tampilkan semua data product
app.get('/api/products',(req, res) => {
  let sql = "SELECT * FROM product";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//tampilkan data product berdasarkan id
app.get('/api/products/:id',(req, res) => {
  let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Tambahkan data product baru
app.post('/api/products',(req, res) => {
  let data = {product_name: req.body.product_name, product_price: req.body.product_price};
  let sql = "INSERT INTO product SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Edit data product berdasarkan id
app.put('/api/products/:id',(req, res) => {
  let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete data product berdasarkan id
app.delete('/api/products/:id',(req, res) => {
  let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
var server = http.createServer(app) 
//Server listening


reload(app).then(function (reloadReturned) {
  // reloadReturned is documented in the returns API in the README
 
  // Reload started, start web server
  server.listen(3000, function () {
    console.log('Web server listening on port ')
  })
}).catch(function (err) {
  console.error('Reload could not start, could not start server/sample app', err)
})