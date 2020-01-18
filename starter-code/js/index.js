var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');



/*class Pizza {
constructor (){

  this.price = document.querySelector(".pu")
  this.quantity = document.querySelector(".qty")
  this.name = name;

}
}

*/


// let barbacoa = new Pizza("barcbacoa", 10, 2);

// document.querySelector(".pu").innerHtml(barbacoa.price);


Number(document.querySelectorAll(".pu span")[0].innerText);


function updateSubtot($product) {


 let price= Number(document.querySelector('.pu span').innerText);

let quantity = Number(document.querySelector('.qty input').value);

let subtotal = document.querySelector('.subtot span'); 



subtotal.innerHTML = price * quantity;


return subtotal;



  // Iteration 1.1
}

function calcAll() {
  // Iteration 1.2
  updateSubtot();
}
$calc.onclick = calcAll;