/* eslint-env mocha,chai */

const {expect} = require('chai')
const {spy} = require('sinon')
const {incrementAsync} = require('./thunks')

describe('Thunks', () => {
  it('incrementAsync', async () => {
    const thunk = incrementAsync()
    const dispatch = spy()
    await thunk(dispatch)

    expect(dispatch.calledWith({type: 'INCREMENT'}))
  })
})
