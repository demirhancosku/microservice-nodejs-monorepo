const fs = require("fs");
const path = require("path");

const servicesPath = path.join(__dirname)+'/Services';

module.exports.services = [];

//Loop for all services
fs.readdirSync(servicesPath).forEach((service) => {
    if (service !== "ServiceLoader.js") {
        module.exports.services.push(servicesPath + "/" + service + '/Routes.js');
    }
});