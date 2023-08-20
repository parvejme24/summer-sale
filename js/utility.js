// get total price 
let totalElement = document.getElementById('total');
let totalElementString = totalElement.innerText;
let totalValue = parseFloat(totalElementString);



// reload home page and remove previous data 
// document.getElementById('reloadButton').addEventListener('click', function () {
//     location.reload();
// });


// get and set product title 
function getAndSetProductItemTitle(productTitleId, setId) {
    let productTitleElement = document.getElementById(productTitleId);
    let productTitle = productTitleElement.innerText;
    const calculationEntry = document.getElementById(setId);
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1} ${productTitle}`;
    calculationEntry.appendChild(p);
}

// get price
function getPrice(priceId) {
    let priceElement = document.getElementById(priceId);
    let priceElementString = priceElement.innerText;
    let priceValue = parseFloat(priceElementString);
    return priceValue;
}