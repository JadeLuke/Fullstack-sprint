const router = require('express').Router()
const ordersController = require('../Controller/ordersController')

router.get('/', ordersController.getAllOrders)
router.post('/', ordersController.createAllOrders)
router.get('/:id', ordersController.getAllOrdersById)
router.put('/:id', ordersController.updateAllOrdersById)
router.delete('/:id', ordersController.deleteAllOrdersById)




module.exports = router 