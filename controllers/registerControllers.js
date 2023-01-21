const path = require('path');
let registerControllers = {
    register: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/register.html"));
    }
}

module.exports = registerControllers;