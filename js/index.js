// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
 
  let priceCont = price.textContent
  let quantityCont = quantity.value
  
  let subtotal = priceCont * quantityCont;

  let subtotalCont = product.querySelector('.subtotal span');

  subtotalCont.innerHTML = subtotal;

  return subtotal
}


function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 //const singleProduct = document.querySelector('.product');
 //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let moreProduct = document.querySelectorAll('.product')

  let totalSum = 0;
  
  moreProduct.forEach((eachProd) => {
    subtotal = updateSubtotal(eachProd);
    totalSum = totalSum + subtotal;

  })
  
 
  // ITERATION 3
  let totalValue = document.querySelector("#total-value span")
  totalValue.innerHTML = totalSum


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
 
let window = document.querySelectorAll(".btn btn-remove")

  window.addEventListener('click', () => {
    
  })


}



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
