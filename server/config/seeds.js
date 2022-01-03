const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Cupcakes' },
        { name: 'Cookies' },
        { name: 'Cakes' },
        { name: 'Cake Truffles' },
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: '',
            description:
                '',
            image: '',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0]._id,
            price: 1.99,
            quantity: 500
        },
        {
            name: ' ',
            category: categories[1]._id,
            description:
                '',
            image: '',
            price: 7.99,
            quantity: 20
        },

    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Test',
        lastName: 'Testing',
        email: 'test@gmail.com',
        password: 'Test1234',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Group',
        lastName: 'Testing',
        email: 'group@gmail.com',
        password: 'group1234'
    });

    console.log('users seeded');

    process.exit();
});