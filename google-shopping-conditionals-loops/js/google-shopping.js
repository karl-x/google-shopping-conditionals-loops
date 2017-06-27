var data = require('../products.json')

// Write your solutions below
// console.log(data.items)
var items = data.items

// 1.  Print the count of these results. Where else is this count information stored in the search results?
var itemCount = 0

for (var i = 0; i < items.length; i++) {
  itemCount += 1
}

console.log('there are ' + itemCount + ' products')

// 2. Print the title of all items with a backorder availability in inventories

// loop through all the items again
for (var j = 0; j < items.length; j++) {
  var eachItem = items[j]
  var inventories = eachItem.product.inventories[0]
  // console.log(inventories)
  if (inventories.availability === 'backorder') {
    console.log(eachItem.product.brand + ' is available for backorder')
  }
}
