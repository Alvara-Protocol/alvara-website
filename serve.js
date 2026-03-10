const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3111;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.xml': 'text/xml',
  '.txt': 'text/plain',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.json': 'application/json',
};

http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  if (url === '/serve.js') { res.writeHead(404); res.end('Not found'); return; }
  let filePath;
  if (url === '/' || url === '/index.html') {
    filePath = path.join(ROOT, 'index.html');
  } else if (url.endsWith('/')) {
    filePath = path.join(ROOT, url, 'index.html');
  } else {
    filePath = path.join(ROOT, url);
  }
  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found: ' + url);
      return;
    }
    res.writeHead(200, {'Content-Type': mime, 'Cache-Control': 'no-cache'});
    res.end(data);
  });
}).listen(PORT, () => console.log('Server ready on port ' + PORT));
