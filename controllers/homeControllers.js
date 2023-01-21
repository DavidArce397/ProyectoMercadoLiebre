const path = require('path');
let homeControllers = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    },
    nombreProducto: (req, res) => {
        if (req.params.nombreProducto == undefined) {
            res.send("Te encontrás viendo un producto.")
        } else {
            res.send(`Te encontrás viendo el producto: ${req.params.nombreProducto}.`)
        }
    }
}

module.exports = homeControllers;