const { Pool, Client } = require('pg')

// pools will use environment variables
// for connection information
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'mytext',
  password: '199701',
  port: 5432,
})

var mqtt = require('mqtt')
var mqtt_client  = mqtt.connect('mqtt://test.mosquitto.org')
 
mqtt_client.on('connect', function () {
  mqtt_client.subscribe('presence')
  mqtt_client.publish('presence', 'Hello mqtt')
})
 
mqtt_client.on('message', function (topic, message) {


client.connect()


// pg queries
const text = 'INSERT INTO person(name, email) VALUES($1, $2) RETURNING *'
const values = [message, 'brian.m.carlson@gmail.com']

client.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  }
})

  
  // message is Buffer
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

