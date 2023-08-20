
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



