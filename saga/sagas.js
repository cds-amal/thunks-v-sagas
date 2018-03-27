const {delay} = require('redux-saga')
const {put, call} = require('redux-saga/effects')
const {increment} = require('../action-creators')

const incrementAsync = function * () {
  yield call(delay, 1000)
  yield put(increment())
}

module.exports = {
  incrementAsync
}
