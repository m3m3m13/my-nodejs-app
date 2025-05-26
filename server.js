const http = require('http');
const fs = require('fs'); // Модуль для работы с файловой системой
const path = require('path'); // Модуль для работы с путями к файлам

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  // Определяем путь к HTML файлу. Предполагаем, что он будет называться 'index.html'
  const filePath = path.join(__dirname, 'index.html');

  // Читаем содержимое файла
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Если файл не найден или произошла ошибка чтения
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('404 Not Found: index.html is missing or inaccessible.\n');
      console.error(`Error reading file: ${err}`);
      return;
    }

    // Если файл успешно прочитан, отправляем его клиенту
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Указываем, что отправляем HTML
    res.end(data); // Отправляем содержимое файла
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
  console.log('Open your browser and navigate to the forwarded port (usually 3000)');
});