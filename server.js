const http = require('http');

const hostname = '0.0.0.0'; // Важно: используем 0.0.0.0 для Codespaces
const port = 3000; // Порт, который будет пробрасываться

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Node.js in Codespaces!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
});
