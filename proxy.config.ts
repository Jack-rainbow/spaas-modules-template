// 不能以斜杠结尾
const apiServer = process.env.API_SERVER;

const mockServer = 'http://39.98.50.163:3000/mock/995';

module.exports = {
  mock: {
    '/spaas-application-center': mockServer,
    '/deepexi-cloud': mockServer,
    '/asset-service': mockServer,
  },
  dev: {
    '/spaas-application-center': apiServer,
    '/deepexi-cloud': apiServer,
    '/deepexi-domain-staff': apiServer,
    '/asset-service': apiServer,
    '/petstore': {
      target: 'http://127.0.0.1:8111',
      pathRewrite: {
        '^/petstore/': '/v2/',
      },
    },
  },
};
