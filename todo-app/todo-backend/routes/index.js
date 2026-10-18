const express = require('express');
const router = express.Router();
const { get } = require('../redis/index')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const count = Number(await get('added_todos'))

  res.json({
    added_todos: count
  })
})

module.exports = router;
