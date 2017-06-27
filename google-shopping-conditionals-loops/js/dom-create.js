  // UPDATING EXISTING ELEMENT
  // target the p element
  // var p = document.querySelector('p')

  // update the p textContent property
  // p.textContent = 'my new description'

  // TARGET THE BUTTON
  var button = document.querySelector('button')
  button.addEventListener('click', addToCart)

  function addToCart () {
    var shoppingList = document.querySelectorAll('#shopping-list li')
    if (!shoppingList.length) {
      alert('shopping list is empty')
      return // need to return, so the function stops running
    }

    var cartList = document.querySelector('#cart-list')
    var lastItem = shoppingList[shoppingList.length - 1]
    cartList.appendChild(lastItem)
  }

  // // newListText is the input
  // function ulCreator (newListText) {
  //   var newLi = document.createElement('li')
  //   newLi.textContent = newListText
  //
  //   var ul = document.querySelector('ul')
  //   ul.appendChild(newLi)
  // }

  function paraCreator () {
    // CREATING NEW ELEMENT
    // create new paragraph
    var newP = document.createElement('p')
    newP.textContent = 'new paragraphzzzz'
    // target the parent
    var body = document.body
    body.appendChild(newP)
  }
})
