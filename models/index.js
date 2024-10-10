const mongoose = require(`mongoose`)
const flightSchema = require(`./flight`)
const airportSchema = require(`./airport`)

const Flight = mongoose.model(`Flight`, flightSchema)
const Airport = mongoose.model(`Airport`, airportSchema)

module.exports = {
    Flight,
    Airport,
}