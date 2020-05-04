const express = require('express')
const logger = require('morgan')

const app = express()

const userRoute = require('./routes/user')

// Middleware
app.use(logger('dev'))

//Routes
app.use('/users', userRoute)
// Routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Server is ok'
    })
})
// Catch
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})
// Error handle  function
app.use(() => {
    const error = app.get('env') === 'development' ? err : {}
    const status  = err.status || 500

    // response to client
    return res.status(status).json({
        error: {
            message: error.message
        }
    })
})
// Start the server
const port = app.get('port') || 3000
app.listen(port, () => console.log(`Server is listening  on port ${port}`))