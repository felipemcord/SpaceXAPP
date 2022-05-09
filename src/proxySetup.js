const createProxyMiddleware = require('http-proxy-middleware');
const { env } = require('process');

const target = env.API_URL ? env.API_URL : 'http://localhost:4000';

const context =  [
  "/latestLaunches",
];

module.exports = function(app) {
  const appProxy = createProxyMiddleware(context, {
    target: target,
    changeOrigin: true,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  });

  app.use(appProxy);
};
