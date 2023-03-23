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
// adding product to the list from local storage
const addList = (product, quantity) => {
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  ul.appendChild(li);
};
// getting data from local storage
const getDataFromLocalStorage = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};
// saving data to the local storage
const saveDataToLocalStorage = (product, quantity) => {
  const cart = getDataFromLocalStorage();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
  //console.log(cartStringified);
};
// showing data from local storage
const showDataFromLocalStorage = () => {
  const savedData = getDataFromLocalStorage();
  //console.log(savedData);
  for (const product in savedData) {
    const quantity = savedData[product];
    //console.log(product, quantity);
    addList(product, quantity);
  }
};

showDataFromLocalStorage();
