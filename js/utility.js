let total = 0;

// get total price 
let totalElement = document.getElementById('total');
let totalElementString = totalElement.innerText;
let totalValue = parseFloat(totalElementString);


// get and set product title 
function getAndSetProductItemTitle(productTitle, setId) {
    const calculationEntry = document.getElementById(setId);
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}.  ${productTitle}`;
    calculationEntry.appendChild(p);
}

// get price
function getPrice(priceId) {
    let priceElement = document.getElementById(priceId);
    let priceElementString = priceElement.innerText;
    let priceValue = parseFloat(priceElementString);
    return priceValue;
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


// apply coupon onclick function for coupon discount 
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


// calculate coupon discount function 
function calculateCouponDiscount(totalPrice) {
    let discountValue = totalPrice * 0.2;
    return discountValue
}
