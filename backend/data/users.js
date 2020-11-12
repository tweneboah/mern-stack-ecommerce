import bcryptjs from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gexample.com',
    password: bcryptjs.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'john',
    email: 'john@gexample.com',
    password: bcryptjs.hashSync('12345', 10),
  },
];

export default users;
