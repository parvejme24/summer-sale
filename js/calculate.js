let total = 0;
let productCard = document.querySelectorAll('#productCard');
for (let singleProduct of productCard) {
    singleProduct.addEventListener('click', function () {
        let productTitle = singleProduct.children[1].children[1].innerText;

        let priceString = singleProduct.children[1].children[2].innerText;
        let price = parseFloat(priceString);


        total += price;
        setProductPrice('total', total.toFixed(2));
        setProductPrice('grandTotal', total.toFixed(2));


    })
}

// set product price and total price 
function setProductPrice(totalId, total) {
    let totalElement = document.getElementById(totalId);
    let totalValue = parseFloat(totalElement.innerText);
    if (typeof totalValue === 'number') {
        totalElement.innerText = total;
    } else {
        return;
    }
};

document.getElementById('applyCoupon').addEventListener('click', function () {
    let couponCodeElement = document.getElementById('couponCode');
    let couponCode = couponCodeElement.value;

    if('SELL200' === couponCode){
        let result = calculateCouponDiscount(total);
        setProductPrice('discount', result.toFixed(2));
    }
})

function calculateCouponDiscount(totalPrice){
    let discountValue = totalPrice * 0.2;
    return discountValue
}