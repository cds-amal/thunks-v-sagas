/* eslint-env mocha,chai */

const {expect} = require('chai')
const {delay} = require('redux-saga')
const {call, put} = require('redux-saga/effects')
const {incrementAsync} = require('./sagas')

const finished = {done: true, value: undefined}

describe('Sagas', () => {
  it('incrementAsync', () => {
    const gen = incrementAsync()

    expect(gen.next().value).to.deep.equal(call(delay, 1000))
    expect(gen.next().value).to.deep.equal(put({type: 'INCREMENT'}))
    expect(gen.next()).to.deep.equal(finished)
  })
})
