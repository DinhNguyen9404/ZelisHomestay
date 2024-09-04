window.onload = function(){
    const prices = document.querySelectorAll(".price");
    const discount = document.querySelector(".discount");
    let total = 0;
    prices.forEach((price)=>{
        const priceText = price.textContent;
        total += parseFloat(priceText.replace(/[^0-9]/g, ''));
    })
    const discountText = discount.textContent;
    total -= parseFloat(discountText.replace(/[^0-9]/g, ''));

    const totalPrice = document.querySelector(".total-price");
    totalPrice.textContent = `${total} VND`;
}