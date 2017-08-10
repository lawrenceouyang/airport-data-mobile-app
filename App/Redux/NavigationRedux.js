import AppNavigation from '../Navigation/AppNavigation';

export const reducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};

/* ------------- Selectors ------------- */

export const getCurrentRouteName = (navState) => {
  if (navState.hasOwnProperty('index')) {
    return getCurrentRouteName(navState.routes[navState.index]);
  }
  return navState.routeName;
};
