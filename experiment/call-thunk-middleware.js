const CALL = Symbol('CALL')

const axios = {
  async get () {
    return 5
  }
}

const call = (fn, ...args) => ({
  type: CALL,
  fn,
  args
})

const callMiddleware = store => next => action => {
  if (action.type !== CALL) return next(action)
  else {
    return action.fn.call(null, ...action.args)
  }
}

const fetch = () => async dispatch => {
  // the advantage with generators is that they give us the iterator
  // to test with...
  const result = await dispatch(call(axios.get, '/api/foo'))
  dispatch({type: 'INCREMENT'})
}

const {createStore, applyMiddleware} = require('redux')
const {default: thunkMiddleware} = require('redux-thunk')
const reducer = require('../reducer')

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
      .withExtraArgument({axios}),
    callMiddleware
  )
)

module.exports = store

// test code
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetch())
