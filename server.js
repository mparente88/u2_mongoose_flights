const express = require(`express`)
const cors = require(`cors`)
const PORT = process.env.PORT || 3001
const db = require(`./db`)
const { Flight, Airport } = require(`./models`)

const app = express()

app.use(cors())
app.use(express.json())

app.get(`/`, (req, res) => {
  res.send(`This is root!`)
})

app.get("/flights", async (req, res) => {
  const flights = await Flight.find({})
  res.json(flights)
})

app.get("/flights/:id", async (req, res) => {
  try {
    const { id } = req.params
    const flight = await Flight.findById(id)
    if (!flight) throw Error("Actor not found")
    res.json(flight)
  } catch (e) {
    console.log(e)
    res.send("Flight not found!")
  }
})

app.get("/airports", async (req, res) => {
  const airports = await Airport.find({})
  res.json(airports)
})
app.get("/airports/:id", async (req, res) => {
  try {
    const { id } = req.params
    const airport = await Airport.findById(id)
    //gives error is falsey ID
    if (!airport) throw Error("404 brand not found")
    res.json(airport)
  } catch (e) {
    console.log(e)
    res.send("Airport not found")
  }
})

app.post("/flights/:id", async (req, res) => {
  try {
    const flight = await new Flight(req.body)
    await flight.save()
    return res.status(201).json({
      flight,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

app.post("/flights/:id", async (req, res) => {
  try {
    let { id } = req.params
    let flight = await Flight.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    if (flight) {
      return res.status(200).json(flight)
    }
    throw new Error("Flight not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.delete("/flights/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Flight.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Flight deleted")
    }
    throw new Error("Flight not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
