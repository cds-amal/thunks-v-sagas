const {takeEvery, all} = require('redux-saga/effects')
const {incrementAsync} = require('./sagas')

const watchIncrementAsync = function * () {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

module.exports = function * rootSaga () {
  yield all([
    watchIncrementAsync()
  ])
}
