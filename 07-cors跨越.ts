import { Http2ServerRequest, Http2ServerResponse } from "http2";

const http = require("http");
const url = require("url");

http
  .createServer((req: Http2ServerRequest, res: Http2ServerResponse) => {
    res.writeHead(200, {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    });

    res.end(
      JSON.stringify({
        name: "dg",
        age: 100,
      })
    );
  })
  .listen(3000);
