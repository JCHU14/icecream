const iceCreams = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Gummy Worms',
    price: .5,
    quantity: 0
}]


function addCookieDoughToCart() {

    const cookieDough = iceCreams.find(iceCream => iceCream.name == 'Cookie Dough')

    cookieDough.quantity++

    console.log('here is your ice cream', cookieDough)

    drawCart()
}

function addVanillaToCart() {

    const vanilla = iceCreams.find(iceCream => iceCream.name == 'Vanilla')

    vanilla.quantity++

    console.log('here is your ice cream', vanilla)

    drawCart()
}


function addStrawberryToCart() {

    const strawberry = iceCreams.find(iceCream => iceCream.name == 'Strawberry')

    strawberry.quantity++

    console.log('here is your ice cream', strawberry)

    drawCart()
}


function addChocolateChipsToCart() {

    const chocolateChips = toppings.find(topping => topping.name == 'Chocolate Chips')

    chocolateChips.quantity++

    console.log('here is your toppings', chocolateChips)

    drawCart()
}

function addSprinklesToCart() {

    const sprinkles = toppings.find(topping => topping.name == 'Sprinkles')

    sprinkles.quantity++

    console.log('here is your toppings', sprinkles)

    drawCart()
}

function addGummyWormsToCart() {

    const gummyWorms = toppings.find(topping => topping.name == 'Gummy Worms')

    gummyWorms.quantity++

    console.log('here is your toppings', gummyWorms)

    drawCart()
}

function drawCart() {
    let content = ''

    iceCreams.forEach(iceCream => {
        if (iceCream.quantity > 0) {

            const totalPrice = (iceCream.price * iceCream.quantity).toFixed(2)

            content += `<p>${iceCream.name}  | |  Qty: ${iceCream.quantity}  | |  Price: $${totalPrice}</p>`
        }
    })


    toppings.forEach(topping => {
        if (topping.quantity > 0) {

            const totalPrice = (topping.price * topping.quantity).toFixed(2)

            content += `<p>${topping.name}  | |  Qty: ${topping.quantity}  | |  Price: $${totalPrice}</p>`
        }
    })

    const cartElement = document.getElementById('cart')
    cartElement.innerHTML = content
}

