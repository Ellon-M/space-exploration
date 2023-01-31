import { configureStore } from '@reduxjs/toolkit';
import MissionReducer from './Missions';

const store = configureStore({
  reducer: {
    missions: MissionReducer.reducer,
  },
});

export default store;
