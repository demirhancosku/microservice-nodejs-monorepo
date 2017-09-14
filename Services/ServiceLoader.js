const fs = require("fs");
const path = require("path");

const servicesPath = path.join(__dirname);

//Loop for services
fs.readdirSync(servicesPath).forEach((service) => {
    if (service !== "ServiceLoader.js") {
        module.exports[service] =  servicesPath + "/" + service + '/Routes.js';
    }
});