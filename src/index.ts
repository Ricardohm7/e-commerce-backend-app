import express from 'express'
import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: ".prod.env" }); // or .env.local
} else {
  dotenv.config({ path: ".dev.env" });
}

const { PORT } = process.env

const app = express()
app.use(express.json())

import shopRouter from './shop'
app.use(shopRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})