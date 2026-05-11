let quantityElement = document.getElementById('quantity');
let totalPriceElement = document.getElementById('total');
let decBtnElement = document.getElementById('dec-btn')
let incBtnElement = document.getElementById('inc-btn')
console.log(decBtnElement,incBtnElement)
console.log(quantityElement.value,totalPriceElement)
let basePrice = 76300;
const updateTotal = (()=> {
    let quantity = quantityElement.value;
    if(isNaN(quantity) || quantity > 0) {
        let totalPrice = parseFloat(quantity * basePrice);
        const formatted = totalPrice.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          });
        totalPriceElement.textContent = `${formatted}`
    }
    else {
        totalPriceElement.textContent = `0đ`
    }
})

quantityElement.addEventListener('input',updateTotal);
decBtnElement.addEventListener('click', () => {
    // Chỉ giảm nếu giá trị hiện tại đang lớn hơn 0
    if (quantityElement.value > 0) {
        quantityElement.value--; // Giảm giá trị
        updateTotal();           // Cập nhật lại giá trị hiển thị
    }
});
incBtnElement.addEventListener('click', (()=> {
    quantityElement.textContent = `${quantityElement.value++}`
    updateTotal();
}))

