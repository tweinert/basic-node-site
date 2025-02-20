const express = require("express");
const app = express();

let options = {
  root: __dirname,
};

app.get("/", (req, res) => res.sendFile("index.html", options));
app.get("/about", (req, res) => res.sendFile("about.html", options));
app.get("/contact-me", (req, res) => res.sendFile("contact-me.html", options));
app.get("/*", (req, res) => res.sendFile("404.html", options));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
