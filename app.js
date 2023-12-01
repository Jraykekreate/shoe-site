let toggleOpen = document.querySelector(".toggle-open")
let toggleClose = document.querySelector(".toggle-close")
let nextButton = document.querySelector(".next")
let previousButton = document.querySelector(".previous")
let mainImage = document.querySelector(".main-image")
let profileCart = document.querySelector(".profile a img")
let cartModal = document.querySelector(".cart-modal")
let removeItem = document.querySelector(".item-count-remove")
let valueItem = document.querySelector(".item-count-value")
let addItem = document.querySelector(".item-count-add")
let checkOutPrice = document.querySelector(".checkout-price")
let checkOutQuantity = document.querySelector(".checkout-quantity")
let checkOutTotal = document.querySelector(".checkout-total")
let bin = document.querySelector(".checkout-bin")
let checkOutCard = document.querySelector(".checkout-card")
let cardButton = document.querySelector(".add-to-cart")
let checkOutPriceValue = 125


let menu = document.querySelector(".menu")
let itemCount = 0;

let images = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg']
let scrollCount = 0
toggleOpen.addEventListener("click", toggleOpenState)
toggleClose.addEventListener("click", toggleCloseState)

function toggleOpenState() {
    if (menu.classList.contains('close')) {
        menu.classList.remove('close')
    }
    menu.classList.toggle('open')
}


function toggleCloseState() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open')
    }
    menu.classList.toggle('close')
}

nextButton.addEventListener('click', scrollNext)

previousButton.addEventListener('click', scrollPrev)
profileCart.addEventListener('click', showProfileCart)

function showProfileCart(e) {
    e.preventDefault()
    if (cartModal.style.display === "none") {
        cartModal.style.display = "block"
    } else {
        cartModal.style.display = "none"
    }

    function skate(e) {
        document.documentElement.addEventListener('click', skate)
        if (!e.target.classList.contains('.cart-modal')) {
            console.log(e.target)
            if (cartModal.style.display = "block") {
                cartModal.style.display = 'none';

                document.documentElement.removeEventListener('click', skate)

            }
        }
    }


}


function scrollNext(params) {
    if (scrollCount < images.length - 1) {
        scrollCount++
        mainImage.src = `images/${images[scrollCount]}`
    } else {
        scrollCount = 0;
        mainImage.src = `images/${images[scrollCount]}`
    }
}

function scrollPrev(params) {

    if (scrollCount > 0) {
        scrollCount--
        mainImage.src = `images/${images[scrollCount]}`
    } else {
        scrollCount = images.length - 1;
        mainImage.src = `images/${images[scrollCount]}`
    }
}

addItem.addEventListener('click', addItemToCart)
removeItem.addEventListener('click', removeItemFromCart);
bin.addEventListener('click', removeBin)

function removeItemFromCart() {
    if (itemCount <= 0) {
        return
    } else {
        itemCount--
        valueItem.innerHTML = itemCount
        console.log(itemCount)

    }


}

function addItemToCart(params) {
    itemCount++
    valueItem.innerHTML = itemCount
    checkOutQuantity.innerHTML = itemCount;
    checkOutTotal.innerHTML = `  $${checkOutPriceValue * itemCount}`
    console.log(itemCount)

}

function removeBin(params) {
    console.log()
    if (document.querySelector(".card-status").style.display === '') {
        document.querySelector(".card-status").style.display = 'flex';
        return;
    }
    if (document.querySelector(".card-status").style.display === 'flex') {
        checkOutCard.remove()
        document.querySelector(".empty-cart").style.display = "block"
        console.log('sigh')
    } else {
        return
    }

}

cardButton.addEventListener("click", showProfileCart)