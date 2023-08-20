let total = 0;
let productCard = document.querySelectorAll('#productCard');
for (let singleProduct of productCard) {
    singleProduct.addEventListener('click', function () {
        let productTitle = singleProduct.children[1].children[1].innerText;
        getAndSetProductItemTitle(productTitle, 'items');
        let priceString = singleProduct.children[1].children[2].innerText;
        let price = parseFloat(priceString);


        total += price;
        setProductTotalDiscountPrice('total', total.toFixed(2));
        setProductTotalDiscountPrice('grandTotal', total.toFixed(2));


    })
}

// set product price and total price 
function setProductTotalDiscountPrice(totalId, total) {
    let totalElement = document.getElementById(totalId);
    let totalValue = parseFloat(totalElement.innerText);
    if (typeof totalValue === 'number') {
        totalElement.innerText = total;
    } else {
        return;
    }
};


function applyCoupon() {
    let couponCodeElement = document.getElementById('couponCode');
    let couponCode = couponCodeElement.value;
    couponCodeElement.value = '';

    if ('SELL200' === couponCode) {
        let discount = calculateCouponDiscount(total);
        let calculateDiscount = total - discount;
        setProductTotalDiscountPrice('discount', discount.toFixed(2));
        setProductTotalDiscountPrice('grandTotal', calculateDiscount.toFixed(2))
    } else {
        alert("Invalid Coupon");
    }
}

function calculateCouponDiscount(totalPrice) {
    let discountValue = totalPrice * 0.2;
    return discountValue
}



