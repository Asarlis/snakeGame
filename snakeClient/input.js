
let connection

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

  if (data === "w") { connection.write("Move: up")};    // moves snake up
  if (data === 's') { connection.write("Move: down")};  // moves snake down
  if (data === 'a') { connection.write("Move: left")};  // moves snake left
  if (data === 'd') { connection.write("Move: right")}; // moves snake right
  if (data === 'q') {connection.write('Say: Boom!')}
};

module.exports = {
  setupInput,
}