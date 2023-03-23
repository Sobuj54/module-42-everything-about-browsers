const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  // console.log(product, quantity);
  addList(product, quantity);
  saveDataToLocalStorage(product, quantity);
};

const addList = (product, quantity) => {
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  ul.appendChild(li);
};

const getDataFromLocalStorage = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveDataToLocalStorage = (product, quantity) => {
  const cart = getDataFromLocalStorage();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
  console.log(cartStringified);
};
