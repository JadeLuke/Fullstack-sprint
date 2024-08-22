const mysql = require('mysql2') 

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'Letsdoit!',
database: 'Restaurant'
})

exports.createAllOrders = (req, res) =>{
    const {orderId, customerName, meal, takeAway, price } = req.body

    if(!customerName || !meal || !takeAway || !price){
        res.send('Enter valid details')
    }
    
    connection.query('INSERT INTO Orders VALUES (?,?,?,?,?)', [orderId, customerName, meal, takeAway, price], (err,result) =>{
    if(err){
        console.log(err);
    }
    else{
        res.send('sent')
    }
    })
    }

exports.getAllOrders = (req,res) =>{

connection.promise().query('SELECT * FROM Orders') 
.then(data => res.send(data[0]))
.catch(err => console.log(err))

}

exports.getAllOrdersById = (req, res) => {
    const orderId = parseInt(req.params.id, 10);

    if (isNaN(orderId)) {
        return res.status(400).send('Invalid order ID');
    }

    connection.query('SELECT * FROM Orders WHERE OrderId = ?', [orderId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error fetching order');
        }
        if (results.length === 0) {
            return res.status(404).send('Order not found');
        }
        res.json(results[0]);
    });
};

exports.updateAllOrdersById = (req, res) => {
    const orderId = parseInt(req.params.id, 10);
    const { customerName, meal, takeAway, price } = req.body;

    if (isNaN(orderId) || !customerName || !meal || !takeAway || isNaN(price)) {
        return res.status(400).send('Invalid input');
    }

    connection.query('UPDATE Orders SET meal = ?, price = ?, takeAway = ? WHERE OrderId = ?', [meal, price, takeAway, orderId], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error updating order');
        }
        res.send('Order updated');
    });
};

exports.deleteAllOrdersById = (req,res) =>{
const orderId = req.params.id

connection.query('DELETE FROM Orders WHERE orderId = ?', orderId, (err)=>{
if(err){
    console.log(err);
}
else{
    res.send('Order deleted')
}
})
}




