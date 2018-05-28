import { dispatch, getState } from '@rematch/core';
import { select } from '@rematch/select'

export const isUserLoggedIn = () => {
  const state = getState();
  return select.app.isUserLoggedIn(state)
};

export const clearApp = () => {
  dispatch.app.clear();
};