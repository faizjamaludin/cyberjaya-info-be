const eventService = require("../Services/event.service");

// create user
const addEvent = async (req, res, next) => {
    try {
        const event = await eventService.addEvent(req.body);
        res.status(201).json(event);
    } catch (err) {
        next(err);
    }
};

const getAllEvent = async (req, res, next) => {
    try {
        const event = await eventService.getAllEvent();
        res.status(201).json(event);
    } catch (err) {
        next(err);
    }
};

const getEvent = async (req, res, next) => {
    try {

        console.log(req.params.id)
        const event = await eventService.getEvent(req.params.id)
        res.status(201).json(event);
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    addEvent,
    getAllEvent,
    getEvent
}