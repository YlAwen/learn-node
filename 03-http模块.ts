import { Http2ServerRequest, Http2ServerResponse } from "http2";
import renderState from "./03-renderState";
import renderHTML from "./03-renderHTML";
const http = require("http");
// const renderState = require("./03-renderState.ts");

// 创建服务器
http
  .createServer((req: Http2ServerRequest, res: Http2ServerResponse) => {
    if (req.url === "/favicon.ico") return;

    const url = new URL(req.url, "http://localhost:3000");
    const { pathname, searchParams } = url;
    // for (let [key, value] of searchParams) {
    //   console.log(key, value);
    // }
    console.log(searchParams.get("aaa"));

    res.writeHead(renderState(pathname), {
      "Content-Type": "text/json;charset=utf-8",
    });
    res.write(
      JSON.stringify({
        pathname: renderHTML(pathname),
        searchParams: searchParams,
      })
    );
    res.end();
  })
  .listen(3000, () => {
    console.log("server start");
  });
