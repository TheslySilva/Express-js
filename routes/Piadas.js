const json = require("./Piadas.json");

function Piadas() {
    function pegarIndice() {
        const indice = Math.floor(Math.random() * json.length);
        return indice;
    }
    return json[pegarIndice()];
}
module.exports = {
    Piadas: Piadas
};
