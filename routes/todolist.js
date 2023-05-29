const express = require('express')
const { getAllToDoList, createNewlist, patchToDoList, deleteTdolist } = require('../controllers/todolist')
const router = express.Router()
// const {getAllToDoList} = require('../controllers/todolist')
router.route('/').get(getAllToDoList).post(createNewlist)
router.route('/:id').patch(patchToDoList).delete(deleteTdolist)


module.exports = router