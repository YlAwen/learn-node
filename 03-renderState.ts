function renderState(url: string) {
  return url === "/home" ? 200 : 404;
}

exports.renderState = renderState;
export default renderState;
