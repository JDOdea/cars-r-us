import { completeOrder, getOrders } from "./database.js";

document.addEventListener("click", (e) => {
    const { name, id } = e.target;
    if (name === "complete") {
        completeOrder(id);
    }
});

export const Orders = async () => {
    const orders = await getOrders()
    return `${orders
    .map((order) => {
        return `<section class="order">
                    ${order.paintColor.color} car with
                    ${order.wheels.style} wheels,
                    ${order.interior.material} interior,
                    and the ${order.technology.package}
                    for a total cost of
                    ${(
                        order.totalCost
                    ).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}
                    <input type="button" name="complete" id="${order.id}" value="Complete">
                </section>`;
    })
    .join("")}`;
}