const express= require('express');
const route1 = express.Router()

const{postdata, postsign} = require("../Controller/employee.controller");

route1.post("/Register", postdata)
route1.post("/login", postsign)

module.exports=route1