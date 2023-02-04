import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllRockets = createAsyncThunk(
  'rockets/getAllRockets',
  async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_ROCKETS);
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
);

const localRockets = JSON.parse(localStorage.getItem('state'));

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')) : [],
    status: 'idle',
  },
  reducers: {
    reserve: (state, { payload }) => {
      const newState = state.rockets?.map((rocket) => {
        if ((rocket.id) !== (payload)) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      /* eslint-disable no-param-reassign */
      state.rockets = newState;
    },
    cancel: (state, { payload }) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      /* eslint-disable no-param-reassign */
      state.rockets = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRockets.fulfilled, (state, { payload }) => {
        payload.forEach((rocketData, index) => {
          const rocket = {
            id: rocketData.id,
            name: rocketData.name,
            type: rocketData.type,
            images: rocketData.flickr_images,
            description: rocketData.description,
            reserved: localRockets?.[index].reserved ? localRockets?.[index].reserved : false,
          };
          state.rockets.push(rocket);
        });
      });
  },
});

export const { reserve, cancel } = rocketSlice.actions;
const { reducer } = rocketSlice;
export default reducer;
