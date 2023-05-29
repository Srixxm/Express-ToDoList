// const express = require('express')

const { json } = require('express')

const getAllToDoList = (request, response) => {
    response.send("to do list ")
}

const createNewlist = (request, response) => {
    // response.send("Created a new list object")
    response.json(request.body)

}

const patchToDoList = (request, response)=> {
    response.send(`Updating existing list with id : ${request.params.id}`)
}

const deleteTdolist = (request, response) => {
    response.send(`Deleting item with id ${request.params.id}`)
}

module.exports = {getAllToDoList, createNewlist, patchToDoList, deleteTdolist}
