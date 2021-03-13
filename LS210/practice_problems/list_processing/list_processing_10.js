// Inventory item availability

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id == id);
}

function isItemAvailable(id, transactions) {
  var selectedItems = transactionsFor(id, transactions);
  var itemSum = 0;
  selectedItems.forEach(function(transaction) {
    if (transaction.movement == 'in') {
      itemSum += transaction.quantity;
    } else {
      itemSum -= transaction.quantity;
    }
  });
  return itemSum >= 0;
}

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true