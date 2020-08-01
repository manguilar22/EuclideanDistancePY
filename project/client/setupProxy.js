const { createProxyMiddleware } = require('http-proxy-middleware');

const url = `http://${process.env.REACT_APP_HOSTNAME}` || "http://127.0.0.1:8000";

/*
module.exports = function(app) {
	  app.use(
		      ['/home','/hospitals'],
		      createProxyMiddleware({
			            target: url,
			            changeOrigin: true,
			          })
		    );
};
*/