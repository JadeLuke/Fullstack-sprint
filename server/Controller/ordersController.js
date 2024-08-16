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
    // .then(data => res.send("sent",data[0]))
    
    // .catch(err => console.log(err))
    }

exports.getAllOrders = (req,res) =>{

connection.promise().query('SELECT * FROM Orders') 
// if(err){
//     console.log(err);
// }
// else{
//     res.send(result)
//     console.log(result);
// }
.then(data => res.send(data[0]))
.catch(err => console.log(err))

}

exports.getAllOrdersById = (req,res) => {
const orders = req.params.id

connection.query('SELECT * FROM Orders WHERE OrderId = ?', orders, (err,result) =>{
if(err){
    console.log(err)
}
else{
    res.send(result)
}
})
}

exports.updateAllOrdersById = (req,res) =>{
const orderId = req.params.id
const { customerName, meal, takeAway, price} = req.body

connection.query('UPDATE Orders SET meal = ? WHERE orderId = ?', [meal,orderId], (err)=>{
if(err){
    console.log(err);
}
else{
    res.send('updated')
}
})
}

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




