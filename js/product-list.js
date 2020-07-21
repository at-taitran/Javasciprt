window.onload = function (){shoppingcart()};
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
        alert('Đã thêm : ' + productName + ' vào giỏ hàng !' );
      }else{
        curProduct = JSON.parse(localCart);
        curProduct.push(getProduct);
        localStorage.setItem('shoppingCart',JSON.stringify(curProduct));
        alert('Đã thêm : ' + productName +  'vào giỏ hàng !' );
      }
      console.log(curProduct);
    }else{
      curProduct.push(getProduct);
      localStorage.setItem('shoppingCart',JSON.stringify(curProduct));
      alert('Đã thêm : ' + productName + ' vào giỏ hàng !' );
      console.log(curProduct);
    }
  }, 250);
}




