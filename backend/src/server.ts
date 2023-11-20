import express from 'express'
import cors from 'cors'
import eventsRouter from './router/eventsRouter'

const app = express()
app.use(cors())
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello from the backend!')
})

app.use('/api/events', eventsRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
