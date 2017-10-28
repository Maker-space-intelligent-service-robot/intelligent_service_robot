const { Pool, Client } = require('pg')

// pools will use environment variables
// for connection information
const pg_client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '123456',
  port: 5432,
})

var mqtt = require('mqtt')
var mqtt_client  = mqtt.connect('mqtt://172.16.0.10')
 
mqtt_client.on('connect', function () {
  mqtt_client.subscribe('presence')
  mqtt_client.publish('presence', 'Hello mqtt')
})
 
mqtt_client.on('message', function (topic, message) {

pg_client.connect()

// pg queries
const text = 'INSERT INTO person(cardid) VALUES($1) RETURNING *'
const values = [message,]

pg_client.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  }
})

/
  console.log(message.toString())
  //mqtt_client.end()
})


const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

