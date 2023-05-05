const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000

const chef = require('./data/chef.json')
const recipe = require('./data/recipe.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('food hub running')
})

app.get('/chef', (req, res) => {
  res.send(chef)
})

app.get('/recipe', (req, res) => {
  res.send(recipe)
})


app.get('/chef/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id)
    const selectedChef = chef.find(c => c.id == id);
    res.send(selectedChef)
})

app.get('/recipe/:id', (req, res) =>{
  const id = parseInt(req.params.id);
  console.log(id)
  if(id === 0){
    res.send(recipe)
  }
  else{
    const chefRecipe = recipe.filter(n => parseInt(n.chef_id) === id);
    res.send(chefRecipe)
  }
})


app.listen(port, () => {
  console.log(`Food hub api is running out ${port}`)
})