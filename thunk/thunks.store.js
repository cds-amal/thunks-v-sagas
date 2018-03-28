const {createStore, applyMiddleware} = require('redux')
const {default: thunkMiddleware} = require('redux-thunk')
const axios = require('axios')
const reducer = require('../reducer')
const {incrementAsync} = require('./thunks')

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
      .withExtraArgument({axios})
  )
)

module.exports = store

// test code
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
store.dispatch(incrementAsync())
