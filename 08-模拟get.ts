import { Http2ServerRequest, Http2ServerResponse } from "http2";

const http = require("http");
const https = require("https");
const url = require("url");

http
  .createServer((req: Http2ServerRequest, res: Http2ServerResponse) => {
    const urlObj = url.parse(req.url, true);
    if (urlObj.pathname !== "/home") return res.end("404");

    res.writeHead(200, {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    });

    httpget((data: string) => {
      res.end(data);
    });
  })
  .listen(3000);

function httpget(fn: Function) {
  let data = "";
  https.get(
    "https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%AF%8C%E9%98%B3&ci=416&channelId=4",
    (res: Http2ServerResponse) => {
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        console.log("end", data);
        fn(data);
      });
    }
  );
}
