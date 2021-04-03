const express = require('express');

const app = express();

app.use(express.json());

app.get('/teste', (req, res) => {
  return res.json({ message: 'Primeiro app na AWS!' })
})

app.listen(8081, console.log('tá rodando!'))