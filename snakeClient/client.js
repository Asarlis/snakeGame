const net = require('net')
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.write('Name: SMD')

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    // code that does something when the connection is first established
  
    console.log(data)
  });
  conn.on('connect', () => {
      console.log("Successfully connected...");
  })
  return conn;
};

module.exports = {
  connect,
}