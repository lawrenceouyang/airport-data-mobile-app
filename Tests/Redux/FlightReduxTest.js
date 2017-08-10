/**
 * Created by aayush.bhandari on 7/11/17.
 */

import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/FlightRedux'

test('request', () => {
  const terminal = 1
  const mode = 'arrival'
  const state = reducer(INITIAL_STATE, Actions.flightRequest(terminal, mode))

  expect(state.fetching).toBe(true)
  expect(state.terminal).toBe(1)
  expect(state.mode).toBe('arrival')
  expect(state.data).toBeNull()
})

test('success', () => {
  const data = {"response":[{"key1":"value1"}]}
  const state = reducer(INITIAL_STATE, Actions.flightSuccess(data))

  expect(state.fetching).toBe(false)
  expect(state.data).toEqual(data)
  expect(state.error).toBeNull()
})

test('failure', () => {
  const state = reducer(INITIAL_STATE, Actions.flightFailure())

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
  expect(state.data).toBeNull()
})
