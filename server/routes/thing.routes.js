const ThingController = require("../contollers/thing.controller")

module.exports = app => {
    app.get("/api/things/all", ThingController.findAllThings)
    app.post("/api/things/create", ThingController.createOneThing)
    app.get("/api/things/:thingid", ThingController.findAThing)
    app.put("/api/things/update/:thingid", ThingController.updateAThing)
    app.delete("/api/things/delete/:thingid", ThingController.deleteAThing)
}