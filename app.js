// requires package used in the project
const express = require('express')
const app = express()
port = 3000
// requires express-handlebars here
const exphbs = require('express-handlebars')
// require restaurant.json
const restaurantData = require('./restaurant.json')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurantList: restaurantData.results })
})
app.get('/search', (req, res) => {//when searchbar is empty, show all restaurants
  console.log('req.query: ', req.query)
  const keyword = req.query.keyword.toLowerCase()
  const FilteredRestaurant = restaurantData.results.filter(item => { return item.name.toLowerCase().includes(keyword) || item.category.toLowerCase().includes(keyword) })
  res.render('index', { restaurantList: FilteredRestaurant, keyword: keyword })
})
app.get('/restaurants/:restaurant_id', (req, res) => {
  console.log('req.params.restaurant_id: ', req.params.restaurant_id)
  const ClickedRestaurant = restaurantData.results.find(item => item.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: ClickedRestaurant })
})

// start and listen on th Express server
app.listen(port, () => {
  console.log(`the server is listening on localhost:${port}`)
})