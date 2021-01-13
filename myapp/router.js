const express = require('express');
const router = express.Router();

const todos = require ('./todosController')


exports.index = function (req, res) {
    res.send({key: "item", arr:todoList});
  }


router.put('/todo/:id', todos.update)
router.delete('/todo/:id', todos.delete)
router.get('/todo/:id', todos.show)
router.get('/todo', todos.index)
router.post('/todo/create', todos.create)

module.exports = router;
