const express = require('express')
const {urlencoded} = require('express')
const app = express()
const PORT =3500
const to_do_list = require("./routes/todolist")
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/v1/todolist', to_do_list)


app.get('/', (request, response) => {
    response.send("working.")
})
app.listen(PORT)
console.log("your code is running in http://localhost:3500/");
