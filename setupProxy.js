const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
   app.use(
      "/api",
      createProxyMiddleware({
         target: "http://localhost:5000", // This should match the port your Express server is running on.
         changeOrigin: true,
      })
   );
};
