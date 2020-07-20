window.onload = function (){shoppingcart()};
var products = 
  [{"name" : "Product 1","price" : "100$"},
  {"name" : "Product 2","price" : "120$"},
  {"name" : "Product 3","price" : "130$"}];
function shoppingcart(){
    //view list product
    var productRow = '<tr>';
    for(var i = 0 ; i < products.length;i++){
      productRow += '<tr>' + '<td>'+ i + '</td>' + '<td class="name">' + products[i].name + '</td>'
      + '<td class="price">' + products[i].price + '</td>' + '<td>'
      +'<button onclick="addtocartFunction(this.id)" id="'+products[i].name+'" name="'+products[i].name +'">' + 'add to cart</button>'
      +'</td>'+ '</tr>';
    }
    productRow += '</tr>';
    var productList = document.getElementById('productList');
    productList.innerHTML = productRow;
    viewCart();
}
function viewCart(){
  // View cart list
  var getCartList= [];
  getCartList = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(getCartList);
    var cartRow = '<tr>';
    for(var j = 0 ; j < getCartList.length;j++){
      cartRow += '<tr>' + '<td>'+ j + '</td>' + '<td class="name">' + getCartList[j].name + '</td>'
      + '<td class="price">' + getCartList[j].price + '</td>' + '<td>'
      +'<button onclick="deleteproductFunction(this.id)" id="'+getCartList[j].name+'" name="'+getCartList[j].name +'">' + 'Delete</button>'
      +'</td>'+ '</tr>';
    }
    cartRow += '</tr>';
    var cartList = document.getElementById('cartList');
    cartList.innerHTML = cartRow; 
}
    //save to local storage
function addtocartFunction(productName) {
  setTimeout(function() {
    let getProduct = products.find(x => x.name == productName);
    var curProduct = [];
    var localCart = localStorage.getItem('shoppingCart');
    if(localCart != null){
      curProduct = JSON.parse(localCart);
      var checkExit = curProduct.find(x => x.name == getProduct.name);
      console.log(checkExit);
      if(checkExit != null){
        localStorage.setItem('shoppingCart',JSON.stringify(curProduct));
        viewCart();
      }else{
        curProduct = JSON.parse(localCart);
        curProduct.push(getProduct);
        localStorage.setItem('shoppingCart',JSON.stringify(curProduct));
        viewCart();
      }
      console.log(curProduct);
    }else{
      curProduct.push(getProduct);
      localStorage.setItem('shoppingCart',JSON.stringify(curProduct));
      viewCart();
      console.log(curProduct);
    }
  }, 250);
}
// Delete product 
function deleteproductFunction(pName) {
  setTimeout(function() {
    var curP = [];
    var localC = localStorage.getItem('shoppingCart');
    curP = JSON.parse(localC);
    let productDel = curP.find(y => y.name == pName);
    var index = curP.indexOf(productDel);
    if(index > -1 ){
      curP.splice(index,1);
      localStorage.setItem('shoppingCart',JSON.stringify(curP));
    }
    // var result = removeItemOnce(curP,productDel);
    // localStorage.setItem('shoppingCart',JSON.stringify(result));
    viewCart();
    console.log(result); 
  }, 125);
}

// function removeItemOnce(arr, value) {
//   var index = arr.indexOf(value);
//   if (index > -1) {
//     arr.splice(index, 1);
//   }
//   return arr;
// }


