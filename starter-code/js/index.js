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





function updateSubtot(product) {

 
    let price= Number(product.querySelector(".pu span").innerText);
    console.log(price)
    let quantity = Number(product.querySelector(".qty input").value);
    let subtotal = product.querySelector(".subtot span");
    subtotal.innerHTML = price * quantity;
    return subtotal;
      // Iteration 1.1
    
   

}

function calcAll() {
  let tr = document.querySelectorAll(".product")
  console.log(tr)
     tr.forEach(function(product, i){updateSubtot(product)});
   }

 $calc.onclick = calcAll;

function addCell(cart){

  function updateSubtot(product) {
    let price= Number(product.querySelector(".pu span").innerText);
    console.log(price)
    let quantity = Number(product.querySelector(".qty input").value);
    let subtotal = product.querySelector(".subtot span");
    subtotal.innerHTML = price * quantity;
    return subtotal;
      // Iteration 1.1
    }
    
   
   
  
     // Iteration 1.1
   }
   
   function calcAll() {
     // Iteration 1.2
  
      let tr = document.querySelectorAll(".product")
      console.log(tr)
         tr.forEach(function(product, i){updateSubtot(product)});
       
   }
   $calc.onclick = calcAll;
   
   
   
  //  function addRow(){
  //   document.getElementById("cart").insertRow(-1).innerHTML = '<td></td><td></td><td></td><td></td><td>';
  // }

  // addRow();


   



