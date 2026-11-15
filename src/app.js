const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hi hello client");
});
server.listen("1991", () => {
  console.log("Sever start");
});
