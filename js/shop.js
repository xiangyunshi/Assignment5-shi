var customername = "Chaky";
var price = 10;
var quantity = 3;


document.getElementById("customer-name").innerHTML = "Chaky";
document.getElementById("price").innerHTML = "$" + totalPrice;

var products = ["Pizza","Nann","Sourdough","Foccacia","Iphone X"];
var price = [40,10,20,80,1000];
var productsText = "";
var productsElement = document.getElementById("product-list");
var totalPrice = document.getElementById("price");

productsText = productsText + "<li class='list-group-item'>" + products[0] + "<span class='badge'>$" + price[0] + "</li>";
productsText = productsText + "<li class='list-group-item'>" + products[1] + "<span class='badge'>$" + price[1] + "</li>";
productsText = productsText + "<li class='list-group-item'>" + products[2] + "<span class='badge'>$" + price[2] + "</li>";
productsText = productsText + "<li class='list-group-item'>" + products[3] + "<span class='badge'>$" + price[3] + "</li>";
productsText = productsText + "<li class='list-group-item'>" + products[4] + "<span class='badge'>$" + price[4] + "</li>";
productsElement.innerHTML = productsText;
totalPrice.innerHTML = (price[0] + price[1] + price[2] + price[3] + price[4]) * 0.75;



 
 var today = new Date(); 
 var hour=today.getHours();
 var morning=""; 
 var morning = document.getElementById("time");   
 if (hour>=8 & hour<=12) morning="Good morning";
 if (hour>=12 & hour<=18) morning="Good afternoon";
 if (hour>=18 & hour<=24) morning="Good evening";
 time.innerHTML = morning;       
