const express = require('express')
const server = express()
const cors = require('cors');
server.use(cors());
server.use(express.json())
server.use('/orders', require('./Routes/ordersRoutes'))





server.listen(3200)
console.log('server running');


