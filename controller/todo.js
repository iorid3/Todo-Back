const todo = require('../models/todo')

const getTodo = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  todo.find({},(err, data) => {
    if (err) return err
    res.json(data)
  })
}

const update=(req,res)=>{
  res.header('Access-Control-Allow-Origin', '*');
  todo.remove({},(err,data)=>{
  if (err) return err
  console.log(req.body)
  todo.insertMany(req.body).then(function(){
    console.log("Data inserted")
    res.json(data) 
}).catch(function(error){
    console.log(error)     
});
})}

module.exports = {
  getTodo,
  update,
}