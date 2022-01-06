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
            name: 'Sprinkle Explosion',
            description:
                'A white confetti cupcake with vanilla butter cream, chocolate drizzle, and sprinkles with a secret inside.',
            image: 'sprinkle_explosion.jpg',
            category: categories[0]._id,
            price: 46.00,
            quantity: 500
        },
        {
            name: 'Strawberry',
            description: 'Yellow cupcake with strawberry butter cream and fresh strawberries.',
            image: 'strawberry_cupcake.jpg',
            category: categories[0]._id,
            price: 46.00,
            quantity: 500
        },
        {
            name: 'Cinnamon Roll',
            category: categories[0]._id,
            description:
                'Cinnamon cupcake with cinnamon powdered vanilla butter cream along with a cinnamon roll.',
            image: 'cinnamon_roll.jpg',
            price: 46.00,
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