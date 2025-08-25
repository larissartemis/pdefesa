// Importa os módulos Express e Path
const express = require('express');
const path = require('path');

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta em que o servidor irá rodar.
const port = process.env.PORT || 3000;

// Configura o Express para usar o EJS como sistema de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Middleware para servir arquivos estáticos da pasta 'public'.
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('layout', {
    pageTitle: 'Plano de Defesa',
    content: 'index'
  });
});

// Rota para a página "Linha do Tempo"
app.get('/timeline', (req, res) => {
  res.render('layout', {
    pageTitle: 'Linha do Tempo',
    content: 'timeline'
  });
});

// Rota para a nova página "QR Code"
app.get('/qr-code', (req, res) => {
  res.render('layout', {
    pageTitle: 'QR Code',
    content: 'qrcode'
  });
});

// Rota para a nova página "Matrizes de Risco"
app.get('/matrizes', (req, res) => {
  res.render('layout', {
    pageTitle: 'Matrizes de Risco',
    content: 'matrizes'
  });
});

// Rota para a página "Contato"
app.get('/contato', (req, res) => {
  res.render('layout', {
    pageTitle: 'Contato',
    content: 'contato'
  });
});

// Inicia o servidor e o faz "escutar" (listen) na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log('Pressione Ctrl + C para parar o servidor.');
});
