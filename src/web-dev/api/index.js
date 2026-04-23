const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API DEV funcionando');
});

app.listen(3000, () => {
  console.log('API DEV en puerto 3000');
});