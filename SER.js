let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

function renderCart() {
    let html = "";
    let total = 0;

    cart.forEach(item => {
        html += `<p>${item.name} - ${item.price} ₸</p>`;
        total += item.price;
    });

    html += `<h3>Итого: ${total} ₸</h3>`;

    document.getElementById("cart").innerHTML = html;
}

function orderWhatsApp() {
    let message = "Заказ:%0A";

    cart.forEach(item => {
        message += `${item.name} - ${item.price} ₸%0A`;
    });

    let url = "https://wa.me/77780265555?text=" + message;
    window.open(url, "_blank");
}