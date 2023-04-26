const express = require('express');
const router = express.Router();
const pgController = require('../controllers/pgController');

router.post('/signUp', pgController.signUp ,(req,res) => {
  res.status(200);
})
router.post('/login', pgController.login , (req,res) => {
  res.status(200).json(res.locals.loginReq)
})
module.exports = router;