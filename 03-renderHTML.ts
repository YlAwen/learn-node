function renderHTML(url: string) {
  return url === "/home" ? "<h1>首页</h1>" : "404 NOT FOUND";
}

exports.renderState = renderHTML;
export default renderHTML;
