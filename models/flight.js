const { Schema } = require(`mongoose`)

const flightSchema = new Schema(
    {
        airline: { type: String, required: true },
        flightNumber: {type: String, required: true },
        price: { type: Number, required: true },
        departingAirport: {type: Schema.Types.ObjectId, ref: `Airport`},
        arrivingAirport: { type: Schema.Types.ObjectId, ref: `Airport` },
        departureDateTime: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = flightSchema