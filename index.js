const Express = require("express");
const Cors = require("cors");
const App = Express();
const PORT = 3000;
App.use(Cors());

const Piada = require("./routes/Piadas.js");

App.get("/", (req, res) => {
    const formatar =JSON.stringify( Piada.Piadas(),null,2);

    res.setHeader("Content-Type", "application/json");
    res.send(formatar);
});

App.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
