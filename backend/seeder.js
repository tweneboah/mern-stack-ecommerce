import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';

import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    //product
    const samplePrpducts = products.map(product => {
      return { ...product, user: adminUser };
    });
    //Create products
    await Product.insertMany(samplePrpducts);
    console.log('Data imported');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//Script to run our function
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

//configure our script like this
//"data:import": "node backend/seeder",
//  "data:destroy": "node backend/seeder -d"

//HOW TO RUN

// yarn data:import
// yarn data:destroy

//You need to add "type": "module", to the package because this is not runing by our main file so it doesn't have access to esm package
