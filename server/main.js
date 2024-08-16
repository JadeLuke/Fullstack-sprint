const express = require('express')
const server = express()
server.use(express.json())
server.use('/orders', require('./Routes/ordersRoutes'))





server.listen(3200)
console.log('server running');


