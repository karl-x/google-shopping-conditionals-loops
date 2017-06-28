document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    console.log('Checkout this JSON! ', data)

    // START YOUR CODE FROM HERE AND HERE ONLY
    // ALL YOUR INTERNAL FUNCTIONS SHOULD START FROM HERE AND HERE ONLY TOO

    // Declarations:==========================
    var items = data.items
    var space = document.querySelector('#err')
    var shoppingList = document.querySelector('#shopping-list')
    var buttonAdd = document.querySelector('#add')
    var buttonClear = document.querySelector('#clear')
    var buttonSearch = document.querySelector('#search')
    var buttonDisplay = document.querySelector('#display')
    var searchBrand = document.querySelector('#brand')
    var searchAuthor = document.querySelector('#author')


    //Buttons:================================
    buttonAdd.addEventListener('click', addToCart)
    buttonClear.addEventListener('click', clearCart)
     
    buttonDisplay.addEventListener('click', displayAll)
    buttonSearch.addEventListener('click', searchByBoth)



    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE
    items.forEach(function (item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      var radio = document.createElement('input')
      radio.type = 'radio'
      radio.id ='radioBtn'
      shoppingList.appendChild(listItem).appendChild(radio)
    })

    function addToCart () {
      var shoppingList = document.querySelectorAll('#shopping-list li')
        if (!shoppingList.length) {
        alert('shopping list is empty')
        return // need to return, so the function stops running
      }
      var cartList = document.querySelector('#cart-list')
      var lastItem = shoppingList[shoppingList.length - 1]
      var checked = document.querySelectorAll('radtioBtn').checked === true
      cartList.appendChild(lastItem)
    }

    function clearCart () {
       var cartList = document.querySelectorAll('#cart-list li')
         if (!cartList.length) {
           alert('cart list is empty')
         return // need to return, so the function stops running
       }
      var shoppigList = document.querySelector('#shopping-list')
       var lastItem = cartList[cartList.length - 1]
       var checked = document.querySelectorAll('radtioBtn').checked === true
      shoppingList.appendChild(lastItem)
    }

    function searchByBrand () {
      shoppingList.innerHTML = ''
      items.forEach(function (item) {
        var listItem = document.createElement('li')
        listItem.textContent = item.product.title
        var radio = document.createElement('input')
        radio.type = 'radio'
        radio.id = 'radioBtn'

        var brand = item.product.brand.toUpperCase()


          if (brand === searchBrand.value.toUpperCase()) {
            shoppingList.appendChild(listItem).appendChild(radio)
          }
      })
    }

    function searchByAuthor () {
      shoppingList.innerHTML = ''
      items.forEach(function (item) {
        var listItem = document.createElement('li')
        listItem.textContent = item.product.title
        var radio = document.createElement('input')
        radio.type = 'radio'
        radio.id = 'radioBtn'

        var author = item.product.author.name.toUpperCase()

          if (author === searchAuthor.value.toUpperCase()) {
            shoppingList.appendChild(listItem).appendChild(radio)
          }
      })
    }

    function searchByBoth () {
      shoppingList.innerHTML = ''
      items.forEach(function (item) {
        var listItem = document.createElement('li')
        listItem.textContent = item.product.title
        var radio = document.createElement('input')
        radio.type = 'radio'
        radio.id = 'radioBtn'

        var author = item.product.author.name.toUpperCase()

        var brand = item.product.brand.toUpperCase()
        console.log(brand)
        console.log(author)
        console.log(searchAuthor.value.toUpperCase())
        console.log(searchBrand.value.toUpperCase())

        if (author === searchAuthor.value.toUpperCase() && brand === searchBrand.value.toUpperCase()) {
          shoppingList.appendChild(listItem).appendChild(radio)
        }
      })
    }

    function displayAll () {
      shoppingList.innerHTML = ''
      items.forEach(function (item) {
        var listItem = document.createElement('li')
        var radio = document.createElement('input')
        radio.type = 'radio'
        radio.id ='radioBtn'

        listItem.textContent = item.product.title
        shoppingList.appendChild(listItem).appendChild(radio)
        searchBrand.value = ''
        searchAuthor.value = ''
      })
    }

    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
