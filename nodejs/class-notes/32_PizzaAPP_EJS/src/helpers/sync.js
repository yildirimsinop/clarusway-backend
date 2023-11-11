"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {

    // return null;

    /* REMOVE DATABASE *
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */

    /* User */
    // Deleted All Records:
    const User = require('../models/user')
    await User.deleteMany().then(() => console.log(' - User Deleted All'))
    // Example User:
    await User.create({
        _id: "654cddeb9846a03c2a0ee001",
        username: "admin",
        email: "admin@admin.com",
        password: "12345678",
        isActive: true,
        isAdmin: true
    })
    await User.create({
        _id: "654cddeb9846a03c2a0ee002",
        username: "test",
        email: "test@test.com",
        password: "12345678",
        isActive: true,
        isAdmin: false
    })

    /* Topping */
    // Deleted All Records:
    const Topping = require('../models/topping')
    await Topping.deleteMany().then(() => console.log(' - Topping Deleted All'))
    // Example Topping:
    await Topping.create({
        _id: "654cddeb9846a03c2a0ee101",
        name: "Cheese",
    })
    await Topping.create({
        _id: "654cddeb9846a03c2a0ee102",
        name: "Pepperoni",
    })
    await Topping.create({
        _id: "654cddeb9846a03c2a0ee103",
        name: "Pineapple",
    })
    await Topping.create({
        _id: "654cddeb9846a03c2a0ee104",
        name: "Olive",
    })
    await Topping.create({
        _id: "654cddeb9846a03c2a0ee105",
        name: "Sousage",
    })

    /* Pizza */
    // Deleted All Records:
    const Pizza = require('../models/pizza')
    await Pizza.deleteMany().then(() => console.log(' - Pizza Deleted All'))
    // Example Pizza:
    await Pizza.create({
        _id: "654cddeb9846a03c2a0ee201",
        name: "Super Pizza 201",
        image: "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg",
        price: 99.99,
        toppings: [
            "654cddeb9846a03c2a0ee101",
            "654cddeb9846a03c2a0ee102",
            "654cddeb9846a03c2a0ee103",
        ]
    })
    await Pizza.create({
        _id: "654cddeb9846a03c2a0ee202",
        name: "Super Pizza 202",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljiC2wYE65lr6sfTx0CI-3fByV21OY-HEruMLWc14OLZ6T29vzOP4_0AQyrpITcuoZm0&usqp=CAU",
        price: 129.99,
        toppings: [
            "654cddeb9846a03c2a0ee102",
            "654cddeb9846a03c2a0ee103",
            "654cddeb9846a03c2a0ee104",
        ]
    })
    await Pizza.create({
        _id: "654cddeb9846a03c2a0ee203",
        name: "Super Pizza 203",
        image: "https://hips.hearstapps.com/hmg-prod/images/bbq-pizza-320-1547837615.jpg",
        price: 149.99,
        toppings: [
            "654cddeb9846a03c2a0ee103",
            "654cddeb9846a03c2a0ee104",
            "654cddeb9846a03c2a0ee105",
        ]
    })
    await Pizza.create({
        _id: "654cddeb9846a03c2a0ee204",
        name: "Super Pizza 204",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NaRA1XtgPgTFKkCe8ZKXeJDOQkhj7spI7A&usqp=CAU",
        price: 199.99,
        toppings: [
            "654cddeb9846a03c2a0ee101",
            "654cddeb9846a03c2a0ee103",
            "654cddeb9846a03c2a0ee105",
        ]
    })
    await Pizza.create({
        _id: "654cddeb9846a03c2a0ee205",
        name: "Super Pizza 205",
        image: "https://www.thespruceeats.com/thmb/MD-dSsFP6k5XBSk9XcdOIfnF4K0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prosciutto-pizza-4844358-hero-04-c0a6f73057ce4fed88982b75a5c2c8e1.jpg",
        price: 199.99,
        toppings: [
            "654cddeb9846a03c2a0ee102",
            "654cddeb9846a03c2a0ee103",
            "654cddeb9846a03c2a0ee104",
            "654cddeb9846a03c2a0ee105",
        ]
    })
    for (let x = 11; x <= 50; x++) {
        await Pizza.create({
            _id: "654cddeb9846a03c2a0ee2" + x,
            name: "Super Pizza 2" + x,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu32ZkwB6QN3SChlL-dVKiZd4SwpJEg3zAS2JP4S-X1PbK5Wo_nVVD-jjJe4rE8Gbo_Zc&usqp=CAU",
            price: 199.99,
            toppings: [
                "654cddeb9846a03c2a0ee101",
                "654cddeb9846a03c2a0ee102",
                "654cddeb9846a03c2a0ee103",
                "654cddeb9846a03c2a0ee104",
                "654cddeb9846a03c2a0ee105",
            ]
        })
    }

    /* Order */
    // Deleted All Records:
    const Order = require('../models/order')
    await Order.deleteMany().then(() => console.log(' - Order Deleted All'))
    for (let userId = 1; userId <= 2; userId++) {
        // Example Order:
        await Order.create({
            userId: "654cddeb9846a03c2a0ee00" + userId,
            pizzaId: "654cddeb9846a03c2a0ee201",
            size: 'Small',
            quantity: 1,
            price: 99.99,
            totalPrice: 99.99
        })
        await Order.create({
            userId: "654cddeb9846a03c2a0ee00" + userId,
            pizzaId: "654cddeb9846a03c2a0ee202",
            size: 'Medium',
            quantity: 2,
            price: 99.99,
            totalPrice: 199.98
        })
        await Order.create({
            userId: "654cddeb9846a03c2a0ee00" + userId,
            pizzaId: "654cddeb9846a03c2a0ee203",
            size: 'Large',
            quantity: 3,
            price: 99.99,
            totalPrice: 299.97
        })
        await Order.create({
            userId: "654cddeb9846a03c2a0ee00" + userId,
            pizzaId: "654cddeb9846a03c2a0ee202",
            size: 'XLarge',
            quantity: 2,
            price: 99.99,
            totalPrice: 199.98
        })
        await Order.create({
            userId: "654cddeb9846a03c2a0ee00" + userId,
            pizzaId: "654cddeb9846a03c2a0ee203",
            size: 'Medium',
            quantity: 3,
            price: 99.99,
            totalPrice: 299.97
        })
        await Order.create({
            userId: "654cddeb9846a03c2a0ee00" + userId,
            pizzaId: "654cddeb9846a03c2a0ee204",
            size: 'Large',
            quantity: 4,
            price: 99.99,
            totalPrice: 399.96
        })
    }

    // End:
    console.log('* Synchronized *')
    /* Finished */

}