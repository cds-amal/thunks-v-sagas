const {createStore, applyMiddleware} = require('redux')
const {default: thunkMiddleware} = require('redux-thunk')
const reducer = require('../reducer')
const {incrementAsync} = require('./thunks')

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

module.exports = store

// test code
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
store.dispatch(incrementAsync())
