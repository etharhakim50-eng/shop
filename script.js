let map=document.getElementById("map");
let filter=document.getElementById("filter");
let find=document.getElementById("find");
let laptop=document.getElementById("laptop");
let highPrice=document.getElementById("highPrice");
let allAvailable=document.getElementById("allAvailable");
let totalPrice=document.getElementById("totalPrice");

let products = [ 
  { id: 1, name: "Laptop", price: 20000, available: true },
  { id: 2, name: "Mouse", price: 500, available: true },
  { id: 3, name: "Keyboard", price: 1000, available: false },
  { id: 4, name: "Phone", price: 15000, available: true },
  { id: 5, name: "Headphone", price: 800, available: false }
 ];

let productNames = products.map(product => product.name);
map.innerHTML = productNames.join(" | ");

let prdLessThan2000 = products.filter(item=>item.price<2000);
filter.innerHTML=prdLessThan2000.map(items=> items.name).join(" | ");

let prdWithId3=products.find(item=> item.id===3);
find.innerHTML=prdWithId3.name;


let prdLaptop=products.find(item=>item.name==="Laptop" && item.price===20000);
laptop.innerHTML=`id= ${prdLaptop.id} - name: ${prdLaptop.name} - price: ${prdLaptop.price} - isAvailable?: ${prdLaptop.available}`;

let prdHighPrice=products.some(item=>item.price>18000);
highPrice.innerHTML=prdHighPrice;

let prdAllAvailable=products.every(item=>item.available===true);
allAvailable.innerHTML=prdAllAvailable;

let total=products.reduce((acc,item)=>acc+item.price,0);
totalPrice.innerHTML=total;