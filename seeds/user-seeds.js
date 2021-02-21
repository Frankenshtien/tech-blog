const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "frankenshtien",
    email: "kylecondie666@gmail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
