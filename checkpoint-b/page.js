import { items } from "./items.js";

export function renderItems(list) {
  const container = document.querySelector("#list");
  container.replaceChildren();
  for (const item of list) {
    const row = document.createElement("li");
    row.classList.add("listing");
    row.textContent = `${item.name} - ${item.price} EGP`;
    container.append(row);
  }
}
export function matching() {
  return items.filter((item) => item.inStock === false);
}
export function start() {
  renderItems(items);
  document.querySelector("#narrow").addEventListener("click", () => {
    renderItems(matching());
    const status = document.querySelector("#status");
    if (status) status.textContent = "Showing out-of-stock items.";
  });
}
window.addEventListener("DOMContentLoaded", start, { once: true });
