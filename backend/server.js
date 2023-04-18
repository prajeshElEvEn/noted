const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const { errorHandler } = require('./middlewares/errorMiddleware')
dotenv.config()

connectDB()

const app = express()

app.use('/api/notes', require('./routes/noteRoutes'))

const port = process.env.PORT || 5000

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
