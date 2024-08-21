let data =[]
let currentId = 1;

function readAll () {
let orderList = document.getElementById("restaurant-display");
let elements = "";
data.forEach((d,index) =>{
elements += `
<div class="cards" id="cards">
<div class="headings">
<h5> Name:
</h5>
<p id="userName">${d.userName}</p>
</div><br>
<div class="Meals">
<h5> Meal:</h5>
<p id="userMeal">${d.meal}</p>
</div><br>
<div class="TakeAway">
<h5>TakeAway:</h5>
<p id="takeAways">${d.takeAway}</p>
</div>
<div class="prices">
<h5>Price:<h5>
<p id="priceItem">${d.price}</p>
</div>
<h5 class="actionHeading"> Action: </h5>
<button class="btnDel" onclick="removeTask(this)">Delete</button>
<button class="btnDe" onclick="{edit(${d.id})}">Edit</button>

</div>
`
})

orderList.innerHTML = elements;
document.getElementById("name") = "";
document.getElementById("takeaway-select") = "";
}

function addBurger () {
let userName = document.getElementById("name").value
let takeAway = document.getElementById("takeaway-select").value 
let meal = "Beef Burger";
 let price = 'R90';

if (userName == " " || takeAway == ""){
    alert('please finish order')
} 
else{
    let newObject = {id: currentId++, userName,takeAway, meal,price}
    data.push(newObject)
    document.getElementById('createForm').style.display = 'none'
    document.getElementById('addBtn').style.display = 'block'
    readAll()
}
}
function addSteak () {
    let userName = document.getElementById("name").value
    let takeAway = document.getElementById("takeaway-select").value 
    let meal = "Steak and chips";
     let price = 'R115';
    
    if (userName == " " || takeAway == ""){
        alert('please finish order')
    } 
    else{
        let newObject = {id: currentId++, userName,takeAway, meal,price}
        data.push(newObject)
        document.getElementById('createForm').style.display = 'none'
        document.getElementById('addBtn').style.display = 'block'
        readAll()
    }
    }

    function addPizza () {
        let userName = document.getElementById("name").value
        let takeAway = document.getElementById("takeaway-select").value 
        let meal = "BBQ Chicken Pizza";
         let price = 'R140';
        
        if (userName == " " || takeAway == ""){
            alert('please finish order')
        } 
        else{
            let newObject = {id: currentId++, userName,takeAway, meal,price}
            data.push(newObject)
            document.getElementById('createForm').style.display = 'none'
            document.getElementById('addBtn').style.display = 'block'
            readAll()
        }
        }
        function removeTask(delTask) {
            delTask.parentElement.remove();
            data.splice(delTask.parentElement.id, 1);
          }

        function createForm(){
         document.getElementById('createForm').style.display = 'block'
         document.getElementById('addBtn').style.display = 'none'
        }

        function edit(id) {
            document.getElementById('updateForm').style.display = 'block'
            document.getElementById('addBtn').style.display = 'none'

            let updateObj = data.find(f => f.id === id)
            document.getElementById('update_id').value = updateObj.id
            document.getElementById('newName').value = updateObj.userName
            document.getElementById('newTakeaway-select').value = updateObj.takeAway
        }
 
        function update(){
         let id =  parseInt(document.getElementById('update_id').value)
          let userName = document.getElementById('newName').value
         let takeAway = document.getElementById('newTakeaway-select').value
        //  let meal = "Beef Burger";
        //  let price = 'R90';
        //  let updateObj = {id,userName, takeAway}

         let index = data.findIndex(f => f.id === id)
         if(index !== -1){
         data[index] = {id: currentId++, userName,takeAway}

         document.getElementById('updateForm').style.display = 'none'
         document.getElementById('addBtn').style.display = 'block'

         readAll() }
        //  else{
        //     console.log('item not found');
        //  }
        }