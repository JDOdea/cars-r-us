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
export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}