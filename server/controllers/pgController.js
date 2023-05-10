// const { query } = require('express');
const db = require('../models/dbModels');

const pgController = {
  signUp: (req,res,next) => {
    const { username, email, password } = req.body;
    const queryString = 'INSERT INTO users (username, email, password) Values ($1, $2, $3)'
    db.query(queryString, [username, email, password], (err, result) => {
      if (err) {
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
    const { enteredUsername, enteredPassword } = req.body;
    const queryString = `SELECT * FROM users WHERE username = '${enteredUsername}' AND password = '${enteredPassword}'`;
    db.query(queryString,(err, result) => {
      if (err) {
        return next({
          log: 'Express error caught in pgController login',
          message: {err: 'error occurred in pgController.login'}
        })
      } else if (result.rows.length === 0) {
        return next({
          log: 'login searched DB but nothing found. result.rows empty',
          message: {err: 'login info not found in DB'}
        })      
      } else {
        console.log(result.rows[0])
        res.locals.loginReq = result.rows[0];
        return next();
      }
    })
  }
};

module.exports = pgController;