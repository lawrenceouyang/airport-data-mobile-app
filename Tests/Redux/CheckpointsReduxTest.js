import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/CheckpointRedux';

test('request', () => {
  const state = reducer(INITIAL_STATE, Actions.checkpointRequest());

  expect(state.fetching).toBe(true);
  expect(state.data).toBeNull();
});

test('success', () => {
  const data = {
    response: [
      { key1: 'value1' },
      ],
  };
  const state = reducer(INITIAL_STATE, Actions.checkpointSuccess(data));

  expect(state.fetching).toBe(false);
  expect(state.data).toEqual(data);
  expect(state.error).toBeNull();
});

test('failure', () => {
  const state = reducer(INITIAL_STATE, Actions.checkpointFailure());

  expect(state.fetching).toBe(false);
  expect(state.error).toBe(true);
  expect(state.data).toBeNull();
});

test('clear', () => {
  const data = {
    response: [
      { key1: 'value1' },
    ],
  };
  let state = reducer(INITIAL_STATE, Actions.checkpointSuccess(data));
  state = reducer(state, Actions.checkpointClear());
  expect(state.data).toBeNull();
});
