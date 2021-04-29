const net = require('net')
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.write('Name: SMD')
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
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