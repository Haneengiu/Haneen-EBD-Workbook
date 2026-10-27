// Checkpoint A for haneengiu. See spec.md for the generated requirements.
import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter((order) => order.city === "Mansoura" && order.status === "paid");
}

export function summarize(orders) {
  return orders.reduce((total, order) => total + order.price * order.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch {
    return `No order with id ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(orders.map(({ item, quantity }) => ({ item, quantity })));
}
