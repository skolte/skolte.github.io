(function(){
  var gems = [{ name: 'Azurite', price: 2.95, canPurchase : true, soldOut : false },
              { name: 'Bzurite', price: 3.95, canPurchase : false, soldOut : false },
              { name: 'Czurite', price: 4.95, canPurchase : true, soldOut : true },
              { name: 'Dzurite', price: 5.95, canPurchase : true, soldOut : false }];
  var app = angular.module('gemStore', []);
  app.controller('StoreController', function(){
  this.products = gems;});
})();
