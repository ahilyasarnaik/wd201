const http = require("http");
const fs = require("fs");
const portno = require("minimist")(process.argv.slice(2));

let home;
let project;
let registration;
let registrationScript;

fs.readFile("home.html", (err, data) => {
  if (err) throw err;
  home = data.toString();
});

fs.readFile("project.html", (err, data) => {
  if (err) throw err;
  project = data.toString();
});

fs.readFile("registration.html", (err, data) => {
  if (err) throw err;
  registration = data.toString();
});

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHead(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/registration":
        response.write(registration);
        response.end();
        break;
      case "/project":
        response.write(project);
        response.end();
        break;
      default:
        response.write(home);
        response.end();
        break;
    }
  })
  .listen(portno.port);
