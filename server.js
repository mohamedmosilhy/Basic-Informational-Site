const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let file = "404.html";

  if (req.url === "/") file = "./views/index.html";
  else if (req.url === "/about") file = "./views/about.html";
  else if (req.url === "/contact-us") file = "./views/contact-us.html";
  else if (req.url === "/styles.css") file = "./public/styles.css";

  const filePath = path.join(__dirname, file);
  const ext = path.extname(filePath);

  let type = "text/html";
  if (ext === ".css") type = "text/css";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      const notFound = path.join(__dirname, "./views/404.html");
      return fs.readFile(notFound, (_, nf) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(nf);
      });
    }

    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
