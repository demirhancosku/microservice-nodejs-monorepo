const SearchController = require("./Controllers/SearchController");

module.exports = () => {

    /**
     * GET Example LISTS
     */
    global.server.get('/example', SearchController.getExampleList);


    /**
     * POST Example LIST
     */
    global.server.post('/example/list' ,SearchController.postExample)


}