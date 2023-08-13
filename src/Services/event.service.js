const Event = require("../Models/eventModel");

// create comment user
const addEvent = async (eventData, next) => {
    const event = new Event({
        eventTitle: eventData.eventTitle,
        eventDesc: eventData.eventDesc,
        from: eventData.from,
        to: eventData.to,
        eventLocation: eventData.eventLocation,
    });

    event.save();
};

const getAllEvent = async () => {
    const event = Event.find().sort({ dateCreated: -1 })

    return event;
};

const getEvent = async (id) => {
    const event = await Event.findById(id);

    return event
}

module.exports = {
    addEvent,
    getAllEvent,
    getEvent
}