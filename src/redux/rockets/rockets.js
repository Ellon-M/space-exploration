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

// const localRockets = JSON.parse(localStorage.getItem('state'));

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
  },
  reducers: {
    reserve: (state, { payload }) => {
      const newState = state.rockets.map((rocket) => {
        if ((rocket.id) !== (payload)) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      state.rockets = newState;
    },
    cancel: (state, { payload }) => {
      const newState = state.rockets.map((rocket) => {
        if ((rocket.id) !== (payload)) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      state.rockets = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRockets.fulfilled, (state, action) => {
        const rockets = action.payload;
        rockets.forEach((rocketData) => {
          const rocket = {
            id: rocketData.id,
            name: rocketData.name,
            type: rocketData.type,
            images: rocketData.flickr_images,
            description: rocketData.description,
            reserved: false,
          };
          state.rockets.push(rocket);
        });
      });
  },
});

export const { reserve, cancel } = rocketSlice.actions;
const { reducer } = rocketSlice;
export default reducer;
