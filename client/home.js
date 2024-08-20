let data =[]

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
</div>
<h5 class="actionHeading"> Action: </h5>
<button class="btnDel" onclick=>Delete</button>
</div>
`
})

orderList.innerHTML = elements;
document.getElementById("name") = "";
document.getElementById("takeaway-select") = "";
}

function add () {
let userName = document.getElementById("name").value
let takeAway = document.getElementById("takeaway-select").value 

if (userName == " " || takeAway == ""){
    alert('please finish order')
} 
else{
    let newObject = {userName,takeAway}
    data.push(newObject)
    readAll()
    // burgerItem()
}
}

// let events = document.getElementById("burger")
// events.addEventListener("click", burgerItem)

// function burgerItem(){
// let meal = "Beef Burger";
// let price = 'R90';
// }

