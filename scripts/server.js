const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const packageJSON = require('../package.json');

const PORT = packageJSON.serverjs.port;
const SERVER_URL = `${packageJSON.serverjs.url}:${PORT}`;

const server = http.createServer((req, res) => {
    // Serve static files (e.g., HTML, CSS, JS, PNG)
    if (req.url === '/' || req.url.endsWith('.html') || req.url.endsWith('.css') || req.url.endsWith('.js') || req.url.endsWith('.png')) {
        let filePath = path.join(process.cwd(), req.url === '/' ? 'index.html' : req.url);
        let contentType = 'text/html';
        if (filePath.endsWith('.css')) {
            contentType = 'text/css';
        } else if (filePath.endsWith('.js')) {
            contentType = 'application/javascript';
        } else if (filePath.endsWith('.png')) {
            contentType = 'image/png';
        }

        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('<h1>404 Not Found</h1>');
                } else {
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`);
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    } else {
        // Handle other routes or API endpoints
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Running Node.js server!');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at ${SERVER_URL}/`);
    // Open the browser based on the operating system
    let command;
    switch (process.platform) {
        case 'darwin': // macOS
            command = `open ${SERVER_URL}`;
            break;
        case 'win32': // Windows
            command = `start ${SERVER_URL}`;
            break;
        default: // Linux and others
            command = `xdg-open ${SERVER_URL}`;
    }
    exec(command, (error) => {
        if (error) {
            console.error(`Error opening browser: ${error.message}`);
            return;
        }
        console.log('Browser opened. Yea!');
    });
});