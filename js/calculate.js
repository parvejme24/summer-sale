const makePurchaseButton = document.getElementById('makePurchase');
const applyCouponButton = document.getElementById('applyCoupon');
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


        // make purchase button disable or enable validation
        if (total === 0) {
            makePurchaseButton.setAttribute("disabled")
        } else {
            makePurchaseButton.removeAttribute("disabled")
        }

        // apply button disable or enable validation 
        if (total >= 200) {
            applyCouponButton.removeAttribute("disabled");
        } else {
            applyCouponButton.setAttribute("disabled");
        }
    })
}



