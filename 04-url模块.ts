const url = require("url");

// parse解析
const urlString =
  "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=hhhh&fenlei=256&rsv_pq=f31c1c1d000c311a&rsv_t=7edfX%2B74RhrOzCT8TcI5B6jNQXAcMOmROvmU6RA8SaxG2XVWszR33fwYl2w&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug1=4&rsv_sug7=101&rsv_sug2=0&rsv_btype=i&prefixsug=hhhh&rsp=6&inputT=982&rsv_sug4=1686";
const parsedStr = url.parse(urlString, true);
console.log("parse", parsedStr);

// format合并
const urlObject = {
  protocol: "https",
  slashes: true,
  auth: null,
  host: "www.baidu.com:222",
  port: 222,
  hostname: "www.baidu.com",
  hash: "#tag=110",
  search: "?id=&&name=mouse",
  query: { id: "8", name: "mouse" },
  pathname: "/ad/index.html",
  path: "/ad/index.html?id=8&name=mouse",
};
const formatObj = url.format(urlObject);
console.log(formatObj);

// resolve
const a = url.resolve("/one/two/three", "four");
// /one/two/four
const b = url.resolve("/one/two/three", "/four");
// /four
const c = url.resolve("/one/two/three/", "four");
// /one/two/three/four
const d = url.resolve("/one/two/three/", "/four");
// /four
