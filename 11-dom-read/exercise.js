// Read values from the actual page rather than keeping a second copy of them.
export function pageHeading() {
  return document.querySelector("h1").textContent;
}
export function productCount() {
  return document.querySelectorAll(".card").length;
}
export function productNames() {
  return Array.from(document.querySelectorAll(".card h3")).map((heading) => heading.textContent);
}
export function priceOf(name) {
  const card = Array.from(document.querySelectorAll(".card")).find(
    (card) => card.querySelector("h3").textContent === name
  );
  return card ? card.querySelector(".price").textContent : null;
}
export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out h3")).map((heading) => heading.textContent);
}
window.addEventListener("DOMContentLoaded", () => {
  const lines = [
    `Heading: ${pageHeading()}`,
    `Product count: ${productCount()}`,
    `Products: ${productNames().join(", ")}`,
    `Pen price: ${priceOf("Pen")}`,
    `Sold out: ${soldOutNames().join(", ")}`,
  ];
  document.querySelector("#output").textContent = lines.join("\n");
  console.log(lines.join("\n"));
}, { once: true });
