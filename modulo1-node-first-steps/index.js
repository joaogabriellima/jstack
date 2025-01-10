const http = require('http');
const { URL } = require('url');

const routes = require('./src/routes/routes');

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  let { pathname } = parsedUrl;
  let id = null;

  const splittedEndpoint = pathname.split('/').filter((endpointItem) => Boolean(endpointItem));

  if (splittedEndpoint.length > 1) {
    pathname = `/${splittedEndpoint[0]}/:id`;
    id = splittedEndpoint[1];
  }

  const currentRoute = routes.find((routeObj) => (
    routeObj.endpoint === pathname &&
    routeObj.method === request.method 
  ));

  if (request.url === '/') {
    response.writeHead(200, { "content-type": 'text/html' })
    response.end('<h1>Home</h1>');
    return;
  }

  if (!currentRoute) {
    response.writeHead(404, { "content-type": 'text/html' })
    response.end('<h1>Um erro aconteceu aqui! 404!</h1>');
    return;
  }

  request.query = Object.fromEntries(parsedUrl.searchParams);
  request.params = { id };

  currentRoute.handler(request, response);
});


server.listen(3000, () => console.log('🚀 ~ Server running on port 3000'))