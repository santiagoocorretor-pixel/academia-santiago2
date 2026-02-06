const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Serve index.html
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro ao carregar a página');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        });
        return;
    }

    // 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
});

server.listen(PORT, () => {
    console.log(`🚀 Academia Santiago rodando em http://localhost:${PORT}`);
    console.log(`📚 Abra seu navegador e acesse: http://localhost:${PORT}`);
    console.log(`\n📝 Credenciais de teste:`);
    console.log(`   Usuário: corretor1 | Senha: senha123`);
    console.log(`   Usuário: corretor2 | Senha: senha123`);
    console.log(`   Usuário: admin | Senha: admin123`);
});
