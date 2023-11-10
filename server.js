const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'project', 'public'))); // Use 'project' folder for static files

// Set up the proxy to forward requests from /api to your target server
app.use('/api', createProxyMiddleware({
  target: 'https://in211.scanurag.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
}));

const PORT = 3033;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Endpoint to serve local mock.json
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'public', 'data', 'services.json'));
});

// Default route to serve main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'public', 'main_temp.html')); // Path to main_page.html
});

