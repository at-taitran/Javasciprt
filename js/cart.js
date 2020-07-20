window.onload = function (){viewCart()};
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
    viewCart();
    console.log(result); 
  }, 125);
}
