const {w, a, s, d, q} = require('./constants')

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function (data) {
  // ctrl + c exit enabled
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w") {connection.write(w)}; // moves snake up
  if (data === 's') {connection.write(s)}; // moves snake down
  if (data === 'a') {connection.write(a)}; // moves snake left
  if (data === 'd') {connection.write(d)}; // moves snake right
  if (data === 'q') {connection.write(q)}; // Says Boom! in Snake screen.
};

module.exports = {
  setupInput,
}