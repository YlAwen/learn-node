import { Http2ServerRequest, Http2ServerResponse } from "http2";

const http = require("http");
const url = require("url");

http
  .createServer((req: Http2ServerRequest, res: Http2ServerResponse) => {
    const callback = url.parse(req.url, true).query.callback;

    res.end(
      `${callback}(${JSON.stringify({
        name: "dg",
        age: 100,
      })})`
    );
  })
  .listen(3000);
