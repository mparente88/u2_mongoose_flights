const db = require(`../db`)
const { Airport, Flight } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {

  await Airport.deleteMany()

    const airport1 = await new Airport({
      name: `Evergreen Skies International`,
      location: `Arbor Valley, Oregon`,
      code: `ESI`,
    })
    airport1.save()

    const airport2 = await new Airport({
        name: `Sunrise Horizon Airfield`,
        location: `Sunrise Bay, Florida`,
        code: `SHA`
    })
    airport2.save()

    const airport3 = await new Airport({
        name: `Crystal Peak Gateway`,
        location: `Summit Ridge, Colorado`,
        code: `CPG`
    })
    airport3.save()

    const flights = [
        {
          airline: `SkyWings Airlines`,
          flightNumber: `SWA432`,
          price: 289,
          numberOfSeats: 45,
          departingAirport: airport1._id,
          arrivalAirport: airport2._id,
          departureDateTime: '2024-11-03, 10:30 AM',
        },
        {
            airline: `Blue Horizon Air`,
            flightNumber: `BHA217`,
            price: 399,
            numberOfSeats: 20,
            departingAirport: airport2._id,
            arrivalAirport: airport3._id,
            departureDateTime: '2024-11-02, 8:15 PM',
          },
          {
            airline: `Evergreen Flyers`,
            flightNumber: `EVF109`,
            price: 319,
            numberOfSeats: 60,
            departingAirport: airport3._id,
            arrivalAirport: airport1._id,
            departureDateTime: '2024-11-04, 7:00 AM',
          },
          {
            airline: `Sunscape Air`,
            flightNumber: `SSA522`,
            price: 210,
            numberOfSeats:38,
            departingAirport: airport1._id,
            arrivalAirport: airport2._id,
            departureDateTime: '2024-11-05, 1:45 PM',
          },
          {
            airline: `Mountain Peak Air`,
            flightNumber: `MPA301`,
            price: 450,
            numberOfSeats: 12,
            departingAirport: airport3._id,
            arrivalAirport: airport1._id,
            departureDateTime: '2024-11-01, 6:30 AM',
          },
          {
            airline: `Bayview Airways`,
            flightNumber: `BVA765`,
            price: 279,
            numberOfSeats: 25,
            departingAirport: airport2._id,
            arrivalAirport: airport3._id,
            departureDateTime: '2024-11-06, 3:00 PM',
          },
          {
            airline: `Summit Air Express`,
            flightNumber: `SAE920`,
            price: 499,
            numberOfSeats: 10,
            departingAirport: airport1._id,
            arrivalAirport: airport3._id,
            departureDateTime: '2024-11-07, 9:45 AM',
          }
    ]

    await Flight.deleteMany()

    await Flight.insertMany(flights)
    console.log(`Created flights!`)

}



const run = async () => {
    await main()
    db.close()
}

run()