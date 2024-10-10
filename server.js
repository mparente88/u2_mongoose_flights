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

app.get('/flights', async (req, res) => {
    const flights = await Flight.find({})
    res.json(flights)
  })

app.get('/flights/:id', async (req, res) => {
    try {
      const { id } = req.params
      const flight = await Flight.findById(id)
      if (!flight) throw Error('Actor not found')
      res.json(flight)
    } catch (e) {
      console.log(e)
      res.send('Flight not found!')
    }
  })

  app.get('/airports', async (req, res) => {
    const airports = await Airport.find({})
    res.json(airports)
})
app.get('/airports/:id', async (req, res) => {
    try{
        const { id } = req.params
        const airport = await Airport.findById(id)
        //gives error is falsey ID
        if (!airport) throw Error('404 brand not found')
        res.json(airport)
    }   
    catch (e){
        console.log(e)
        res.send('Airport not found')
    }
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})