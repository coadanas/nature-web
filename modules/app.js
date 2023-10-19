const http = require("http");

const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = 4512;
const hostname = "127.0.0.1";

const server = http.createServer(app);
server.listen(port, hostname, ()=>{
  console.log(`http://${hostname}:${port}`);
});


const staticPath = path.join(__dirname, "../tamplates/public");
app.use(express.static(staticPath));

const viewPath =  path.join(__dirname, "../tamplates/views");
app.set("view engine", "hbs");
app.set("views", viewPath);

const partialsPath =  path.join(__dirname, "../tamplates/partials");
hbs.registerPartials(partialsPath);

app.get("/", (req, res)=>{
res.render("index.hbs");
});