import express from 'express'
import userRoutes from './routes/user.route.js'
import exploreRoutes from './routes/explore.route.js'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()
dotenv.config()
app.use(cors())
app.get('/', (req, res) => {
    res.send("Server is ready")
})

app.use('/api/users', userRoutes)
app.use('/api/explore', exploreRoutes)

app.listen(2000, () => {
    console.log("Server is running on http://localhost:2000")
})