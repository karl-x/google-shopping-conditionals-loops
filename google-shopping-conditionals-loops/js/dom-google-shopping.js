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
    var buttonSearch = document.querySelector('#search')
    var buttonDisplay = document.querySelector('#display')
    var searchBrand = document.querySelector('#brand')
    var searchAuthor = document.querySelector('#author')

    //Buttons:================================
    buttonAdd.addEventListener('click', addToCart)
    buttonSearch.addEventListener('click', searchByAuthor)
    buttonSearch.addEventListener('click', searchByBrand)
    buttonDisplay.addEventListener('click', displayAll)
    // buttonSearch.addEventListener('click', searchByBoth)


    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE
    items.forEach(function (item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      var checkBox = document.createElement('input')
      checkBox.type = 'checkbox'
      shoppingList.appendChild(listItem).appendChild(checkBox)
    })

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

    // function addToCart () {
    //   if (!shoppingList.length) {
    //     alert('shopping list is empty')
    //     return // need to return, so the function stops running
    //   }
    //   var cartList = document.querySelector('#cart-list')
    //   var lastItem = shoppingList[shoppingList.length - 1]
    //   cartList.appendChild(lastItem)
    // }

    function searchByBrand () {
      shoppingList.innerHTML = ""
      items.forEach(function (item) {
        var listItem = document.createElement('li')
        listItem.textContent = item.product.title
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox'

        var brand = item.product.brand


          if (brand === searchBrand.value) {
            shoppingList.appendChild(listItem).appendChild(checkBox)
          }
      })
    }

    function searchByAuthor () {
      shoppingList.innerHTML = ""
      items.forEach(function (item) {
        var listItem = document.createElement('li')
        listItem.textContent = item.product.title
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox'

        var author = item.product.author.name

          if (author === searchAuthor.value) {
            shoppingList.appendChild(listItem).appendChild(checkBox)
          }
      })
    }

    function searchByBoth () {
      shoppingList.innerHTML = ""
      items.forEach(function (item) {
        var listItem = document.createElement('li')
        listItem.textContent = item.product.title
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox';


        var author = item.product.author.name
        var brand = item.product.brand
        // var error = document.createElement('p')
        // error.textContent = 'Your Search Returned 0 Results!'

        if (author === searchAuthor.value && brand === searchBrand.value) {
          shoppingList.appendChild(listItem).appendChild(checkBox)
        }
        // else {
        //    space.appendChild(error)
        // }
      })
    }

    function displayAll () {
      shoppingList.innerHTML = ""
      items.forEach(function (item) {
        var listItem = document.createElement('li')
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox'

        listItem.textContent = item.product.title
        shoppingList.appendChild(listItem).appendChild(checkBox)
      })
    }




    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
