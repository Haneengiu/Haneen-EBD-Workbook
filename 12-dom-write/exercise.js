// Build cards with textContent so names are always displayed as plain text.
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");
  const heading = document.createElement("h3");
  heading.textContent = name;
  const tag = document.createElement("p");
  tag.classList.add("price");
  tag.textContent = `${price} EGP`;
  card.append(heading, tag);
  document.querySelector("#list").append(card);
}
function findCard(name) {
  return Array.from(document.querySelectorAll("#list .card")).find(
    (card) => card.querySelector("h3").textContent === name
  );
}
export function removeProduct(name) {
  const card = findCard(name);
  if (card) card.remove();
}
export function markSoldOut(name) {
  const card = findCard(name);
  if (card) card.classList.add("sold-out");
}
export function clearProducts() {
  for (const card of document.querySelectorAll("#list .card")) card.remove();
}
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => addProduct("Notebook", 45));
  document.querySelector("#reset").addEventListener("click", clearProducts);
}
window.addEventListener("DOMContentLoaded", wireButtons, { once: true });
