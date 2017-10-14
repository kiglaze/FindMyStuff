var db = require("../models");

module.exports = function (app) {
    // get a specific room by id
    app.get("/api/items/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Item
        db.Item.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    });

    // create a new room
    app.post("/api/items", function (req, res) {
        // Create (add) a new room
        db.Item.create(req.body).then(function (dbItem) {
            res.json(dbItem);
        });
    });

};
