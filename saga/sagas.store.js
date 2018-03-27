const {createStore, applyMiddleware} = require('redux')
const createSagaMiddleware = require('redux-saga')
const reducer = require('reducer')

const sagaMiddleware = createSagaMiddleware()

module.exports = createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware
  )
)
