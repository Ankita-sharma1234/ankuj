const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../Modal/connection');
const uuid = require('uuid').v4

let postdata = async (req, res) => {      ////DESTRUCTURING////
    const { name, email, mobile_no, password } = req.body
    const salt = await bcrypt.genSalt(8)
    console.log("salt", salt)
    const pass = await bcrypt.hash(password, salt)
    console.log("pass", pass)

    const data = {
        name, email, mobile_no, id: uuid(), password: pass
    }
    const query = "INSERT INTO employee SET ?"
    await connection.query(query, data, async (err, result) => {
        if (err) {
            return res.json({ "err": err.sqlMessage })
        }
        else {
            res.json({ "result": result })
        }
    })
}
let postsign = async (req, res) => {
    const { email, password } = req.body
    const query = "SELECT * FROM employee WHERE email=?"
    await connection.query(query, email, async (err, result) => {
        if (err) {
            res.json({ error: err.sqlMessage })
        }
        const pass = result[0].password
        const id = result[0].id
        const passcheck = await bcrypt.compare(password, pass)
        if (!passcheck) {
            res.json({ password: "password didnot match" })
        }
        const token = await jwt.sign({ id }, "abc")
        res.json({ response: 200, token })
    }
    )
}

module.exports = { postdata, postsign }