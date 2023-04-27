// const { query } = require('express');
const db = require('../models/dbModels');

const pgController = {
  signUp: (req,res,next) => {
    const { username, email, password } = req.body;
    const queryString = 'INSERT INTO users (username, email, password) Values ($1, $2, $3)'
    db.query(queryString, [username, email, password], (err, result) => {
      if (err) {
        console.log(err)
        return next({
          log: 'Express error caught in pgController signUp',
          message: {err: 'error occurred in pgController.signUp'}
        })
      } else {
        res.locals.newAccount = req.body;
        return next();
      }
    })
  },
  login: (req,res,next) => {
    console.log('body:', req.body)
    const { enteredUsername, enteredPassword } = req.body;
    console.log(req.body)
    const queryString = `SELECT * FROM users WHERE username = '${enteredUsername}' AND password = '${enteredPassword}'`;
    db.query(queryString,(err, result) => {
      if (err) {
        console.log('error occurred')
        return next({
          log: 'Express error caught in pgController login',
          message: {err: 'error occurred in pgController.login'}
        })
      } else {
        res.locals.loginReq = result.rows[0];
        return next();
      }
    })
  }
};

module.exports = pgController;