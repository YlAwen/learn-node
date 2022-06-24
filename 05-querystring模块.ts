const querystring = require("querystring");

// parse解析
const qs = "x=3&y=4";
const parsed = querystring.parse(qs);
// { x: '3', y: '4' }

// stringify将对象转化为query字符串
const query = {
  x: 3,
  y: 4,
};
const stringify = querystring.stringify(query);
// x=3&y=4

// escape字符转义
const sstr = "id=3&city=北京&url=https://www.baidu.com";
const excaped = querystring.escape(sstr);
// id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com

// unescape解除转义
const str =
  "id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com";
const unescaped = querystring.unescape(str);
// id=3&city=北京&url=https://www.baidu.com
