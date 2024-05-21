require("dotenv").config();
const http = require("http");
const host = process.env.HOST;
const port = process.env.PORT;
const fortuneCookies =  require('./powerUp');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    res.writeHead(200, {"Content-Type": "text/html" });
    res.end(`
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>myServer</title>
    </head>
    <body>
        <div>
            <h1>${fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)]}</h1>
        </div>
    </body>
    </html>
    `);
});

server.listen(port, host , () => {
    console.log(`Ho avviato il server su http://${host}:${port}/`);
});