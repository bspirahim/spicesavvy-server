const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000

const chef = require('./data/chef.json')
const category = require('./data/category.json')
const food = require('./data/food.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Spicesavvy running')
})

app.get('/chef', (req, res) => {
  res.send(chef)
})


app.get('/category', (req, res) => {
  res.send(category)
})

app.get('/food', (req, res) => {
  res.send(food)
})




app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  const selectedChef = chef.find(c => c.id == id);
  res.send(selectedChef)
})

app.get('/chef-food/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id)
  if (id === 0) {
    res.send(food)
  }
  else {
    const chefRecipe = food.filter(n => parseInt(n.chef_id) === id);
    res.send(chefRecipe)
  }
})

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  const selectedCategory = category.find(cg => cg.id == id);
  res.send(selectedCategory)
})

app.get('/category-food/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id)
  if (id === 0) {
    res.send(food)
  }
  else {
    const categoryFood = food.filter(f => parseInt(f.category_id) === id);
    res.send(categoryFood)
  }
})


app.listen(port, () => {
  console.log(`Spicesavvy api is running out ${port}`)
})