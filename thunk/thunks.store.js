const {createStore, applyMiddleware} = require('redux')
const thunkMiddleware = require('redux-thunk')
const reducer = require('reducer')

module.exports = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)
