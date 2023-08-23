const database = {
    orderBuilder: {},
    paints: [
        {id: 1, name: "Silver", price: 500},
        {id: 2, name: "Midnight Blue", price: 750},
        {id: 3, name: "Firebrick Red", price: 800},
        {id: 4, name: "Spring Green", price: 650},
    ],
    interiors: [
        {id: 1, name: "Beige Fabric", price: 630},
        {id: 2, name: "Charcoal Fabric", price: 650},
        {id: 3, name: "White Leather", price: 780},
        {id: 4, name: "Black Leather", price: 740},
    ],
    technologies: [
        {id: 1, name: "Basic Package", details: "basic sound system", price: 500},
        {id: 2, name: "Navigation Package", details: "includes integrated navigation controls", price: 660},
        {id: 3, name: "Visibility Package", details: "includes side and rear cameras", price: 750},
        {id: 4, name: "Ultra Package", details: "includes navigation and visibility packages", price: 1100},
    ],
    wheels: [
        {id: 1, name: "17-inch Pair Radial", price: 400},
        {id: 2, name: "17-inch Pair Radial Black", price: 430},
        {id: 3, name: "18-inch Pair Spoke Silver", price: 520},
        {id: 4, name: "18-inch Pair Spoke Black", price: 530},
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelId: 1,
            timestamp: 1614659931693
        }
    ]
}

//Database Exports
export const getPaints = async () => {
    const res = await fetch("https://localhost:7287/paintcolors");
    const data = await res.json();
    return data;
}

export const getInteriors = async () => {
    const res = await fetch("https://localhost:7287/interiors");
    const data = await res.json();
    return data;
}

export const getTechnologies = async () => {
    const res = await fetch("https://localhost:7287/technologies");
    const data = await res.json();
    return data;
}

export const getWheels = async () => {
    const res = await fetch("https://localhost:7287/wheels");
    const data = await res.json();
    return data;
}

export const getOrders = async () => {
    const res = await fetch("https://localhost:7287/orders");
    const data = await res.json();
    return data;
}

//Export functions to set state
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

//Export function to implement customOrder
export const addCustomOrder = async () => {
    //Copy current state of user choices
    const newOrder = {...database.orderBuilder}

    //Send newOrder to API
    await fetch(`https://localhost:7287/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
    });

    //Reset the temporary state for user choices
    database.orderBuilder = {}

    //Broadcast a notification that the permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

//Export function to complete order
export const completeOrder = async (orderId) => {
    await fetch(`https://localhost:7287/orders/${orderId}/fulfill`, {
        method: "POST",
    });
    document.dispatchEvent(new CustomEvent("stateChanged"));
}