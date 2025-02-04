const http = require("http")
const url = require("url")
const fs = require("fs/promises")


const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer();

server.on("request", async (req, res) => {
  let q = url.parse(req.url, true);
  let filename = q.pathname;

  if (filename === "/") {
    filename = "./index.html";
  } else if (filename === "/about") {
    filename = "./about.html";
  } else if (filename === "/contact-me") {
    filename = "./contact-me.html";
  } else {
    filename = "./404.html";
  }

  try {
    const data = await fs.readFile(filename, { encoding: 'utf8' });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  } catch (err) {
    console.error(err);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
