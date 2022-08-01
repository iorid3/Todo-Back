const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/user')
const todoRouter = require('./routes/todo')
const config = require('./config')
//  const cors = require('cors');

app.use(express.json())

mongoose.connect(config.MONGOODB_URL, (err) => {
  if(err) return console.log(err)
  console.log('connected to db successfully')
})
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.use(userRouter)
app.use(todoRouter)

app.listen(process.env.PORT || 3001, () => {
  console.log('serving running on 3001')
})