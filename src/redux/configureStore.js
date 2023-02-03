import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

const handleChange = () => {
  let nextState = store.getState().rockets.rockets;
  if (nextState) {
    nextState = [...new Map(nextState.map((item) => (
      [item.id, item]))).values()];
    const serializedState = JSON.stringify(nextState);
    localStorage.setItem('state', serializedState);
  }
};

export const unsubscribe = store.subscribe(() => {
  handleChange();
});

export default store;