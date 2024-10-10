const { Schema } = require(`mongoose`)

const airportSchema = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        code: {type: String, required: true },
    },
    { timestamps: true }
)

module.exports = airportSchema