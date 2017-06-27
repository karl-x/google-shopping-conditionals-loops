// //
// // // 1.) getItems(objectData)
// // // input: json object
// // // returns: an array of items
// // // Create a function called getItems that simply returns the items array from the google product object.
// // //
// // // Note all other functions (below) use the return of this function as their input.
// //
// // function greet (name) {
// //   return name.toUpperCase()
// // }
// // var output = greet('prima')
// //
// // function greet2 (name) {
// //   console.log(name.toUpperCase())
// // }
// //
// // var outputFromGreet2 = greet2('shimei')
// //
// // console.log('outputFromGreet2 is', outputFromGreet2)
//
// // // 1.) getItems(objectData)
// // // input: json object
// // // returns: an array of items
// // // Create a function called getItems that simply returns the items array from the google product object.
// // //
// // // Note all other functions (below) use the return of this function as their input.
//
// var data = require('../products.json')
//
// function getItems (obj) { // obj is parameters
//   return obj.items
// }
//
// // 2.) getItemsByBrand(items, brand)
// // input: an array of items, a string of a brand to filter with
// // returns: an array of items (of a specific brand)
// // Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
//
// function getItemsByBrand (items, brand) {
//   var filteredByBrand = []
//
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].product.brand === brand) {
//       filteredByBrand.push(items[i])
//     }
//   }
//
//   // this inner function always returns true or false, based on the brand name
//   function isEqualToBrandName (item) {
//     // console.log(item.product.brand === brand)
//     return item.product.brand === brand
//   }
//
//   var newFilteredArray = items.filter(isEqualToBrandName)
//
//   return newFilteredArray
// }
//
// var items = getItems(data)
// console.log(getItemsByBrand(items, 'Lytro'))
