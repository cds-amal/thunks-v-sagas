const {increment} = require('../action-creators')

const incrementAsync = () => dispatch => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(dispatch(increment()))
      } catch (err) {
        reject(err)
      }
    }, 1000)
  })
}

module.exports = {
  incrementAsync
}
