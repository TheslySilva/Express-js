const PORT = 3000;
const Express = require('express');
const App = Express();

App.get("/",(req, res) => {
  
  res.setHeader('Content-Type', 'text/json');
  res.end('Hello Thesly!');
});

App.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
