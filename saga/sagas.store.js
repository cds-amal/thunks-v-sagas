const {createStore, applyMiddleware} = require('redux')
const {default: createSagaMiddleware} = require('redux-saga')
const reducer = require('../reducer')
const sagas = require('./sagas.root')

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware
  )
)

sagaMiddleware.run(sagas)

module.exports = store

// test code
store.subscribe(() => console.log(store.getState()))
store.dispatch({type: 'INCREMENT_ASYNC'})
