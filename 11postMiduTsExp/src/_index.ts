/* const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req: any, res: any) => {

   let pathname = url.parse(req.url).pathname;

   console.log(`Request for ${pathname} received`);

   if (pathname == '/') {

      pathname = '/listaUsuariosComponent.js';
   }

   fs.readFile('build/components/' + pathname.substr(1), (err: any, data: any) => {

      if (err) {

         console.error(err);

         res.writeHead(404, { 'Content-Type': 'text/html' });
         res.write('404 - file not found');

      } else {

         res.writeHead(200, { 'Content-Type': 'application/javascript; charset=UTF-8' });
         res.write(data);
      }

      res.end();
   });
});

server.listen(8080);

console.log('server running on port 8080'); */