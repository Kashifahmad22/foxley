function orderNow(product) {
  const phone = "917858057383"; // your number
  const message = `Hi Foxley, I want to order ${product}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
