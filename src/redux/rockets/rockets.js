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

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRockets.fulfilled, (state, action) => {
        const rockets = action.payload;
        rockets.forEach((rocketData) => {
          const rocket = {
            id: rocketData.id,
            name: rocketData.rocket_name,
            type: rocketData.rocket_type,
            images: rocketData.flickr_images,
            description: rocketData.description,
          };
          state.rockets.push(rocket);
        });
      });
  },
});

const { reducer } = rocketSlice;
export default reducer;
