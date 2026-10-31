const items = [];
export function readForm() {
  return {
    name: document.querySelector("#name").value.trim(),
    price: Number(document.querySelector("#price").value),
  };
}
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}
export function renderList(products) {
  const list = document.querySelector("#list");
  list.replaceChildren();
  for (const product of products) {
    const card = document.createElement("li");
    card.classList.add("card");
    const heading = document.createElement("h3");
    heading.textContent = product.name;
    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `${product.price} EGP`;
    card.append(heading, price);
    list.append(card);
  }
}
export function wireForm() {
  document.querySelector("#product-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const item = readForm();
    const error = document.querySelector("#error");
    if (!item.name) {
      error.textContent = "Give the product a name.";
      return;
    }
    if (!document.querySelector("#price").value || !Number.isFinite(item.price) || item.price <= 0) {
      error.textContent = "Give the product a price.";
      return;
    }
    error.textContent = "";
    items.push(item);
    renderList(items);
    clearForm();
  });
}
window.addEventListener("DOMContentLoaded", wireForm, { once: true });
