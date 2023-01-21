const path = require('path');
let loginControllers = {
    login: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/login.html"));
    }
}

module.exports = loginControllers;